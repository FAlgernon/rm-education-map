<!doctype html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="<?php echo $stylesheet; ?>">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <script>
		var jsonFile = '<?php echo $data_file; ?>';
        function google_init(){
            //google maps ready
        }
    </script>
    <style>
        .row {margin:.5em 0;}
    </style>
    
<title>MMLIS RM Program Finder</title>
</head>
<body>
	<div id="map-container" class="modal-container" data-ng-app="rm_app" data-ng-controller="map_ctrl as $ctrl">

<div id="programModal" class="{{modalToggle}}">
	
    <div class="modal-vis">
    <div class="row">
    	<div class="col-sm-12">Program Description <a href="" ng-click="modalClose()" class="rm-ico ico-x close-x pull-right"><i>x</i></a></div>
        
    </div>
    
        <div ng-model="modalOpenClose" class="modal-content-container">
        	<div ng-include="modalTemplate" id="boundProgDesc"></div>
            
        </div>
    </div>
    
    <div id="modalOverlay" ng-click="modalClose()"> &nbsp; </div>
    
</div>

		<div id="map-filter-controls" class="row">
            <form id="filter-controls" class="col-md-4">
                
                <!--Search Date Filter-->
                <div class="form-group">
                
                
                    <label>Date</label>
                    <div class="date_group input-group input-append">
                        <input id="date-select" type="text" class="form-control" uib-datepicker-popup="{{format}}" ng-model="search.date" is-open="popup1.opened" datepicker-options="dateOptions" ng-required="true" close-text="Close" alt-input-formats="altInputFormats" name="date" value="Any" placeholder="Any" ng-change="filterDateUpdate()" />
                      <span class="input-group-btn ">
                        <button type="button" class="btn btn-default btn-custom" ng-click="open1()"><i class="glyphicon glyphicon-calendar"></i></button>
                      </span>
                    </div>
                </div>

                <!--Search Topic Filter-->
                <div class="form-group">
                    <label>Topic</label>
                    <select name="topic_select" id="topic-select" class="form-control shadow" data-live-search="true" ng-model="search.topic" ng-options="topic.title for topic in eventData.topics">
                        <option value="" ng-selected="true">Any</option>
                    </select>
                </div>

                <!--Search Location Filter-->
                 <div class="form-group">
                    <label>Location</label>
                    <!-- "location.city for location in eventData.locations track by location.id" -->
                     <select name="location_select" id="location-select" class="form-control shadow" data-live-search="true" ng-model="search.location" ng-options="location.facility group by location.city for location in eventData.locations">
                        <option value="" ng-selected="true">Any</option>
                    </select>
                    
                </div>

                <!-- Search Code Filter -->
                <div class="form-group">
                    <label>Code</label>
                    <select name="code_select" id="code-select" class="form-control shadow" data-live-search="true" ng-model="search.code" ng-options="event.code for event in eventData.events">
                        <option value="" ng-selected="true">Any</option>
                    </select>
                </div>
                
            </form>
            
            
			<div id="map-control"  class="col-md-8">
                <div id="map"></div>
                <div id="status"></div>
            </div>
            
		</div>
        <div class="row">
            
            <div class="col-md-12"> {{resultCount()}} </div>
            
            
        </div>
		<div infinite-scroll='loadMore()' infinite-scroll-distance='0.1'>
            <div id="map-results-container" ng-repeat="event in (filteredData = (eventData.events | eventFilter:search:this | orderBy: 'date')).slice(0,loadMax)">
                <div class="map-results-each col-md-12">
                    <div class="result-date col-md-2" ng-switch="event.homeStudy">
                        <ul ng-switch-when="true" class="home-study">
                            <li><span class="glyphicon glyphicon-home"></span></li>
                            <li>{{getEventTypeName(event.type)}}</li>
                        </ul>
                        <ul ng-class="{'special':(getEventType(event.type)=='2')}" ng-switch-default>
                            <li>{{parseDate(event.date) | date:"MMM"}}</li>
                            <li><b>{{parseDate(event.date) | date:"d"}}</b><sup>{{parseDate(event.date) | dateSuffix}} </sup><sub>{{parseDate(event.date) | date:"EEE"}}</sub></li>
                            <li>{{parseDate(event.date) | date:"yyyy"}}</li>
                        </ul>
                    </div>
    
                    <div class="col-md-8">
                        <h3>{{getTopic(event.topic).title}}</h3>
                        
                        <div ng-if="event.homeStudy != true">
                        
                            <a class="rm-ico ico-car event-address" href="https://google.com/maps?q={{getLocation(event.location).address}}" target="_blank">{{getLocation(event.location).facility}}</a>
                        </div>
                    </div>
    
                    <div class="col-md-2 result-right">
                        <h4>Code: {{event.code}}</h4>
                        <a href="" class="rm-ico ico-eye" ng-click="programDescription(event.topic, event.url)">Program Description</a><br>
                        <a href="{{event.url}}" class="rm-ico ico-check" target="_blank">Register</a>
                    </div>
                </div>
            </div>
		</div>
    </div>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDLahhfoVtxfV4AIjS-3v8MXCb-zn2ggH8&callback=google_init">
    </script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!--<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>-->
    <script src="js/angular.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-sanitize.js"></script>
    <script src="js/ui-bootstrap-tpls-2.3.2.min.js"></script>
    <script src="<?php echo $gmap_styles; ?>"></script>
    <script src="js/rm-map-reduce.js?nocache"></script>
    
    <script>

        var app = angular.module('rm_app', ['ui.bootstrap', 'ngSanitize', 'infinite-scroll']);
        app.controller('map_ctrl', ['$scope', '$http', '$filter', '$uibModal', '$sce', function($scope, $http, $filter, $uibModal, $sce, $modalRes) {
			
			//Data Arrays
            $scope.eventData = [];
            $scope.uniqueLocations = [];
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
			$http.get(jsonFile).then(successCallback, errorCallback);
			
			// Loaded JSON data successfully
			function successCallback(response){
                gMap.init(); //initialize google map
				$scope.eventData = response.data;
				$scope.dataLoaded=true;
				
				if($scope.eventData.locations != null) {
					var tmpData = [];
			        for(var i=0; i < $scope.eventData.locations.length;i++){
			            var city = $scope.getCity($scope.eventData.locations[i].address);
			            $scope.eventData.locations[i].city = city;
			            if(tmpData.indexOf(city)==-1){
				            tmpData.push(city);
				        }
			        }
			        $scope.uniqueLocations = tmpData;	
				}
                
                
			};

			// Failed to load JSON data
			function errorCallback(error){
				alert("Failed to load event data. Please try again.");
				console.log(error);
			}

			// Return City from Address string
			$scope.getCity = function(address){
		        address = address.trim();// Trim the address.
		        var comma = address.indexOf(',');// Find the comma.
		        //return address.slice(1, comma);// Pull out the city.
		        return address.split(",")[1].trim();
			}
            
            // Return Topic from unique id
            $scope.getTopic = function(topicId){
                for(var i=0;i<$scope.eventData.topics.length;i++){
                    if($scope.eventData.topics[i].id == topicId)
                        return $scope.eventData.topics[i];
                }
                return false;
            }
			
			// Return Location from unique id
            $scope.getLocation = function(locationId){
                for(var i=0;i<$scope.eventData.locations.length;i++){
                    if($scope.eventData.locations[i].id == locationId)
                        return $scope.eventData.locations[i];
                }
                return false;
            }
			
			$scope.getEventType = function(type){
				if(type == null || typeof type == "undefined"){
					return "1";
				}else {
					return type;
				}
			}
									 
			$scope.getEventTypeName = function(type){
				return $scope.eventTypes[parseInt($scope.getEventType(type))-1];
			}

			//Parse Date - for fancy event list date display
			$scope.parseDate = function(date){
				return Date.parse(date);
			}
            
            //Return count of matched results array
            $scope.resultCount = function(){
                var response = "";
                var datLen = $scope.filteredData.length;
                if(datLen > 0){
                    response += "Matched " + datLen + ( (datLen > 1) ? " Events." : " Event.");
                }else{
                    response += "No Results Matching criteria. Please revise your search."
                }
                return response;
            }
			
			//Get locations to matched events
			$scope.matchingLocations = function(eventsData){
				var tmpMatched = [];
				var tmpLoc = {};
				tmpLoc.numEvts = 0;
				for(var i = 0; i < eventsData.length; i++){
                    if(!eventsData[i].homeStudy){
						var mLoc = $scope.getLocation(eventsData[i].location);
                        var matchedID = tmpMatched.indexOf(mLoc);
						
                        //if matched event location is not in tmp array, add it
                        if(matchedID==-1){
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
			}
			
			//Watch output/display data change
			$scope.$watchCollection('filteredData', function(newData, oldData) {
                //if(typeof $scope.eventData != undefined)
				    gMap.updateMap($scope.matchingLocations(newData));
			});
			
			//Watch output/display data change
			$scope.$watchCollection('search', function(newData, oldData) {
				//console.log("search watch", $scope.search);
			});
			
//======================================================
//  Program Description Modal
//======================================================
			// Close Modal
			$scope.modalClose = function(){
				$(".modal-content-container").scrollTop(0);
				$scope.modalToggle = $scope.modalStates.hidden;
				$scope.programDescriptionHTML = "closed";
				$scope.registerUrl = "";
				$scope.displayTopic = null;
				
				
			}
			
			// Open modal for program description links
			$scope.programDescription = function(t, url){
				$scope.displayTopic = $scope.getTopic(t);
				$scope.registerUrl = url;
				$scope.programDescriptionHTML = $scope.displayTopic.description.overviewHtml;		// Set Program Description HTML
				$scope.modalToggle = $scope.modalStates.visible;	// Show Modal
				//console.log("programDescriptionHTML", $scope.programDescriptionHTML);
				
				
			};

//======================================================
//  ui.bootstrap Datepicker
//======================================================
		//Datepicker clear button
		  $scope.clear = function() {
			$scope.search.date = null;
		  };
		
		  $scope.inlineOptions = {};
		
		  $scope.dateOptions = {
			dateDisabled: disabled,
			formatYear: 'yy',
			startingDay: 0,
			showWeeks: false
		  };

		  // Disable dates not in events data
		  function disabled(data) {
			var cDate = data.date;  
			var check = $scope.checkDateInEvents(cDate);
			return data.mode == 'day' && !check;
		  }
		  
            //check calendar dates to event dates
			$scope.checkDateInEvents = function($date){
			 for(var i = 0; i < $scope.eventData.events.length; i++){
				 var dA = new Date($scope.eventData.events[i].date);
				 var dB = new Date($date);
				 dA.setHours(0,0,0,0);
				 dB.setHours(0,0,0,0);
				 
				 
				if(dA.getTime() == dB.getTime()){
                    //skip this one if it is a home study course
					if($scope.eventData.events[i].homeStudy)
                        return false;
                    
                    //otherwise if matched
					return true;
					break;
				}
			 }
			 return false;
			}
		
		  //Datepicker popup
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

		if(events!=null && events.length > 0){
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
						if ((searchFilter.date === null || typeof searchFilter.date == 'undefined') || dZ.getTime() == new Date(searchFilter.date).getTime() || _event.homeStudy){
		
							//Filter by Code
							if (searchFilter.code === null || _event.code == searchFilter.code.code){
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
	}
});

/* ng-infinite-scroll - v1.0.0 - 2013-02-23 */
var mod;mod=angular.module("infinite-scroll",[]),mod.directive("infiniteScroll",["$rootScope","$window","$timeout",function(i,n,e){return{link:function(t,l,o){var r,c,f,a;return n=angular.element(n),f=0,null!=o.infiniteScrollDistance&&t.$watch(o.infiniteScrollDistance,function(i){return f=parseInt(i,10)}),a=!0,r=!1,null!=o.infiniteScrollDisabled&&t.$watch(o.infiniteScrollDisabled,function(i){return a=!i,a&&r?(r=!1,c()):void 0}),c=function(){var e,c,u,d;return d=n.height()+n.scrollTop(),e=l.offset().top+l.height(),c=e-d,u=n.height()*f>=c,u&&a?i.$$phase?t.$eval(o.infiniteScroll):t.$apply(o.infiniteScroll):u?r=!0:void 0},n.on("scroll",c),t.$on("$destroy",function(){return n.off("scroll",c)}),e(function(){return o.infiniteScrollImmediateCheck?t.$eval(o.infiniteScrollImmediateCheck)?c():void 0:c()},0)}}}]);

</script>


 
</body>
</html>