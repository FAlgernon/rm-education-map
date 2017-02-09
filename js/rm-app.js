var app = angular.module('rm_app', ['ui.bootstrap', 'ngSanitize', 'infinite-scroll']);
app.controller('map_ctrl', ['$scope', '$http', '$filter', '$uibModal', '$sce', function($scope, $http, $filter, $uibModal, $sce, $modalRes) {

	//Data Arrays
	$scope.eventData = [];
	$scope.filteredData = [];
	$scope.dataLoaded = false;

	//Search Filter Settings
	$scope.search = {location:null, code:null, date:null, topic:null, $:null};

	//event type display names
	$scope.eventTypes = ["Event", "Event Special", "Home Study", "Online Course"];

	//Modal Options
	$scope.displayTopic = {};
	$scope.modalTemplate = "partials/program-description.html";
	$scope.programDescriptionHTML = "loading...";
	$scope.modalToggle = "modal-hide";
	$scope.modalStates = {visible:"modal-show", hidden:"modal-hide"};

	// "Infinite" load options
	$scope.loadMax = 10;
	$scope.lastTime = Date.now();
	$scope.timeLimit = 15; //ms to wait before updating again; 16=60fps

	//Load JSON data
	$http.get(jsonFile).then(successCallback, errorCallback).catch(console.error);

	// Loaded JSON data successfully
	function successCallback(response){
		gMap.init(); //initialize google map
		$scope.eventData = response.data;
		$scope.dataLoaded=true;
	}

	/**
	* Failed to load JSON data
	*/
	function errorCallback(error){
		alert("Failed to load event data. Please try again.");
	}


	/**
	* Return Topic from unique id
	* @param {Integer} topicId Unique ID
	* @return {Object}
	*/
	$scope.getTopic = function(topicId){
		for(var i=0;i<$scope.eventData.topics.length;i++){
			if($scope.eventData.topics[i].id === topicId){
				return $scope.eventData.topics[i];
			}
		}
		return false;
	};

	/**
	* Return Location from unique id
	* @param {Integer} locationId Unique ID
	* @return {Object}
	*/
	$scope.getLocation = function(locationId){
		for(var i=0;i<$scope.eventData.locations.length;i++){
			if($scope.eventData.locations[i].id === locationId){
				return $scope.eventData.locations[i];
			}
		}
		return false;
	};

	/**
	* Returns the type of event for eventTypes
	* if no event type defined, use default "1"
	* @param {Integer} type index of type
	* @return {Integer}
	*/
	$scope.getEventType = function(type){
		if(type === null || typeof type === "undefined"){
			return "1";
		}else {
			return type;
		}
	};

	/**
	* Return Event Type string/description
	* @param {Integer} type index of type
	* @return {String}
	*/
	$scope.getEventTypeName = function(type){
		return $scope.eventTypes[parseInt($scope.getEventType(type))-1];
	};

	/**
	* Date conversion options if needed.
	* @param {String} date
	* @return {Date}
	*/
	$scope.parseDate = function(date){
		return Date.parse(date);
	};

	/**
	* Return count/description of matched results array
	* @return {String}
	*/
	$scope.resultCount = function(){
		var response = "";
		var datLen = $scope.filteredData.length;
		if(datLen > 0){
			response += "Matched " + datLen + ( (datLen > 1) ? " Events." : " Event.");
		}else{
			response += "No Results Matching criteria. Please revise your search.";
		}
		return response;
	};

	/**
	* Return Locations attached to list of events
	* @return {Array}
	*/
	$scope.matchingLocations = function(eventsData){
		var tmpMatched = [];
		var tmpLoc = {};
		tmpLoc.numEvts = 0;
		for(var i = 0; i < eventsData.length; i++){
			if(!eventsData[i].homeStudy){
				var mLoc = $scope.getLocation(eventsData[i].location);
				var matchedID = tmpMatched.indexOf(mLoc);

				//if matched event location is not in tmp array, add it
				if(matchedID===-1){
					tmpLoc = $scope.getLocation(eventsData[i].location);
					tmpLoc.numEvts = 1;
					tmpMatched.push(tmpLoc);
				}else{
					//if matched event location is in tmp array increment count
					tmpMatched[matchedID].numEvts = tmpMatched[matchedID].numEvts+1;
				}
			}
		}
		return tmpMatched;
	};

	/**
	* Watch output/display data change
	* Update map when filtered data changes
	*/
	$scope.$watchCollection('filteredData', function(newData, oldData) {
		//if(typeof $scope.eventData != undefined)
			gMap.updateMap($scope.matchingLocations(newData));
	});

//======================================================
//  Program Description Modal
//======================================================
	/**
	* Close Modal
	*/
	$scope.modalClose = function(){
		$(".modal-content-container").scrollTop(0);
		$scope.modalToggle = $scope.modalStates.hidden;
		$scope.programDescriptionHTML = "closed";
		$scope.registerUrl = "";
		$scope.displayTopic = null;
	};

	/**
	* Open modal for program description links
	* @param {Integer} t Unique Topic ID
	* @param {String} url link to registration page
	*/
	$scope.programDescription = function(t, url){
		$scope.displayTopic = $scope.getTopic(t);
		$scope.registerUrl = url;
		$scope.programDescriptionHTML = $scope.displayTopic.description.overviewHtml;// Set Program Description HTML
		$scope.modalToggle = $scope.modalStates.visible;// Show Modal
	};

//======================================================
//  ui.bootstrap Datepicker
//======================================================

	/**
	* Datepicker clear date
	* (Button "Clear")
	*/
	$scope.clear = function() {
		$scope.search.date = null;
	};

	//Datepicker config
	$scope.inlineOptions = {};
	$scope.dateOptions = {
		dateDisabled: disabled,
		formatYear: 'yy',
		startingDay: 0,
		showWeeks: false
	};

	/**
	* Disable dates not in events data
	* @param {Object} data
	* @param {String} data.date - Event Date
	*/
	function disabled(data) {
	var cDate = data.date;  
	var check = $scope.checkDateInEvents(cDate);
	return data.mode === 'day' && !check;
	}

	/**
	* Check calendar date to event dates
	* @param {String} date - Event Date
	*/
	$scope.checkDateInEvents = function($date){
	 for(var i = 0; i < $scope.eventData.events.length; i++){
		 var dA = new Date($scope.eventData.events[i].date);
		 var dB = new Date($date);
		 dA.setHours(0,0,0,0);//ensure date time set to 0
		 dB.setHours(0,0,0,0);
		if(dA.getTime() === dB.getTime()){
			//skip this one if it is a home study course - they should not show up on calendar
			if($scope.eventData.events[i].homeStudy){
				return false;
			}

			//otherwise if matched
			return true;
		}
	 }
	 return false;
	};

	//Datepicker popup Config
	$scope.popup1 = {
		opened: false
	};
	$scope.open1 = function($event) {
		$scope.popup1.opened = true;
	};


	$scope.setDate = function(year, month, day) {
		$scope.dt = new Date(year, month, day);
	};

	$scope.formats = ['MM/dd/yyyy'];//, 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	$scope.format = $scope.formats[0];
	$scope.altInputFormats = ['M!/d!/yyyy'];
  
//======================================================
//  "INFINITE" SCROLL
//======================================================
	$scope.loadMore = function() {
		//wait timeLimit ms before increasing limit
		if(Date.now() - $scope.lastTime > $scope.timeLimit){
			var last = $scope.filteredData[$scope.loadMax];
			$scope.loadMax = ($scope.filteredData.length && $scope.loadMax > $scope.filteredData.length) ? $scope.filteredData.length : $scope.loadMax+1;
			$scope.lastTime = Date.now();
		}
	};
  
}]);//controller

//======================================================
// Date Suffix
// For display output - displays 1st, 2nd, 3rd, 4th...
//======================================================
app.filter('dateSuffix', function($filter) {
	var suffixes = ["th", "st", "nd", "rd"];
	return function(input) {
		var dtfilter = $filter('date')(input, 'dd');
		var day = parseInt(dtfilter.slice(-2));
		var relevantDigits = (day < 30) ? day % 20 : day % 30;
		var suffix = (relevantDigits <= 3) ? suffixes[relevantDigits] : suffixes[0];
		return suffix;
	};
});

//======================================================
//  Events Filter Options
//======================================================
app.filter('eventFilter', function() {
	return function (events, searchFilter, $scope){
		var filtered = [];

		if(angular.isDefined(events) && events!==null && events.length > 0){
			for (var i = 0; i < events.length; i++) {
				var _event = events[i];
				var matched = false;
				var dZ = new Date(_event.date);
				 dZ.setHours(0,0,0,0);//force 0 time
				
				//Filter by Location
				if(searchFilter.location === null ||  _event.location === searchFilter.location.id){
					//Filter by Topic
					if (searchFilter.topic === null || _event.topic === searchFilter.topic.id){
						//Filter by Date
						if ((searchFilter.date === null || typeof searchFilter.date === 'undefined') || dZ.getTime() === new Date(searchFilter.date).getTime() || _event.homeStudy){
		
							//Filter by Code
							if (searchFilter.code === null || _event.code === searchFilter.code.code){
								matched = true;	
							}
						}
					}
				}
				if(matched){
					filtered.push(_event);
				}		
			}
		}	
		return filtered;
	};
});

/* ng-infinite-scroll - v1.0.0 - 2013-02-23 */
var mod;mod=angular.module("infinite-scroll",[]),mod.directive("infiniteScroll",["$rootScope","$window","$timeout",function(i,n,e){return{link:function(t,l,o){var r,c,f,a;return n=angular.element(n),f=0,null!=o.infiniteScrollDistance&&t.$watch(o.infiniteScrollDistance,function(i){return f=parseInt(i,10)}),a=!0,r=!1,null!=o.infiniteScrollDisabled&&t.$watch(o.infiniteScrollDisabled,function(i){return a=!i,a&&r?(r=!1,c()):void 0}),c=function(){var e,c,u,d;return d=n.height()+n.scrollTop(),e=l.offset().top+l.height(),c=e-d,u=n.height()*f>=c,u&&a?i.$$phase?t.$eval(o.infiniteScroll):t.$apply(o.infiniteScroll):u?r=!0:void 0},n.on("scroll",c),t.$on("$destroy",function(){return n.off("scroll",c)}),e(function(){return o.infiniteScrollImmediateCheck?t.$eval(o.infiniteScrollImmediateCheck)?c():void 0:c()},0)}}}]);