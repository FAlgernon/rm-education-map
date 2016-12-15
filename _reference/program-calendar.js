/* Program Calendar 0.0.2 */

/* true = use modal window, false = use register link */
var UseModal = false;

/* placeholder for data */
var rmData = {};

/* CLNDR object */
var clndr = {};

/* Risk Management Program Filter */
var rskm = (function() {
	
	/*DOM objects*/
	var filterMenu = $("#filter-menu");
	var topicsMenu = $("#filter-topic");
	var outputList = $("#filter-results");
	var eventTopics = []; //ListA of Topics generated into filter menu
	modalTemplate = _.template($("#modal-template").html()); //template for modal dialog
	
	var modalEnable = false; //enable modal window with information
	var pluginsLoaded = false; //plugins for modal have been loaded
	
	/* runtime storage for filters */
	var filters = {program_code : Array(), location_code : Array(), month : false};
	
	/* matching location tags */
	var tmpLocations = [];
	
	/* working data */
	var filteredData = [];
	
	/* Earliest date found when parsing, if date before today not found, then this will remain false */
	var startDate = false;
	
	/* generated data array - topics, locations, events combined */
	var generatedData = [];
	
	/* Program filter start */
	var init = function(opt) {
		if(opt != null){
			modalEnable = opt.modal || false;
		}
		generate(); //compile data
		filters.month = setCalendarStart(); //new Date().getMonth(); //set date filter to current month
		filterDate(filters.month, generatedData); //run filter for current month
		filter();
		$("#filter-topic input").on('change', filterTopicToggle); //bind change action
		$("#filter-location input").on('change', filterLocationToggle); //bind change action
		$("#filter-menu>a").on('click', menuToggle); //bind tabs action

	  // Init Clndr
	  // ================================================================================
	  clndr.passInEvents = $('#pass-in-events').clndr({
		template: $('#clndr-template').html(),
		events: generatedData, /* load generated events from calendar filter */
		startWithMonth: startDate || generatedData[0].date,
		clickEvents: {
			onMonthChange: function(month)  { rskm.newMonth(month.month()); rskm.filter();  },
			click: function(target) {
					// Toggle "highlight" of corresponding rows in output table.
					if(target.events.length>0){
						$(".highLightRow").removeClass("highLightRow");
						$( ".event-row-" + target.date._i).addClass("highLightRow");
					}
				},	
			onYearChange:  function(month)  { }
		}
	  });
		
	};

	/* Determine start month of calendar 
	 * If there are no events in current month, set start to earliest event.
	*/
	var setCalendarStart = function (){
		//dateSort  = _.sortBy(data, function(record){ return new Date(record.date); });
		var today = new Date()
		var thisMonth = today.getMonth();
		var earliestDate = new Date(generatedData[0].date);
		var earliestMonth = earliestDate.getMonth();
		startDate = (today < earliestDate) ? earliestDate : today;
		return (thisMonth < earliestMonth) ? earliestMonth : thisMonth;
	};
	
	/* Toggles filters into filter array */
	var filterTopicToggle = function(e){
		$(this).parent("label").parent("li").toggleClass("active");
		value = e.target.value; //set value from html
		index = _.indexOf(filters.program_code, value);
		if(index>=0){filters.program_code.splice(index,1)}
		else{filters.program_code.push(value)}
		filter();
	};
	
	/* Toggles filters into filter array */
	var filterLocationToggle = function(e){
		$(this).parent("label").parent("li").toggleClass("active");
		value = e.target.value; //set value from html
		index = _.indexOf(filters.location_code, value);
		if(index>=0){filters.location_code.splice(index,1)}
		else{filters.location_code.push(value)}
		filter();
	};
	
	/* Menu UI - toggles tabs */
	var menuToggle = function(event){
		event.preventDefault();
		menu = $(this).attr("rel");
		$(".toggledVisible").removeClass("toggledVisible");
		$("#"+menu).addClass("toggledVisible");
		
		$("#filter-menu > a").removeClass("tabOn");
		$(this).addClass("tabOn");
	}
	
	/* Returns objects relevent to current month */
	var filterDate = function(filterMonth, data){
		return _.filter(data, function(obj){
			return (new Date(obj.date).getMonth() == filterMonth);
		},this);
	};

	
	/* Filter generated data into working data set generatedData => filteredData */
	var filter = function(params) {
		filteredData = new Array();
		_.each(generatedData, function(obj){
			_topic = ((filters.program_code.length>0)?_.contains(filters.program_code, obj.program_code):true);
			_location = ((filters.location_code.length>0)?_.contains(
				filters.location_code, 
				obj.location_code.replace(/[0-9]/g, '')
			):true);
			_date = (new Date(obj.date).getMonth() == filters.month);
			
			if( _topic && _location && _date ) {
					filteredData.push(obj);	
				}
		}, this);
		
		drawData();
	};
	
	/* draws HTML rows into output table */
	var drawData = function(){
		//clndr.passInEvents.setEvents(filteredData); //update clndr calendar
		$("#filter-results tr td").parent().remove(); //clear teable
		if(filteredData.length < 1){
			$("#filter-results").append('<tr><td colspan="3">No results found</td></tr>');//no results
		}else{
			_.each(filteredData, listRow);//each row
		}
	}
	
	/* Generates an HTML table row for a given event */
	var listRow = function(data) {
	  if(data != 'undefined' && data != null){
		  
		  /* Renders data for for this record into the modal template for use in $.appOverlay() */
		  var modalData = modalTemplate({
			  title:data.title,
			  code:data.code,
			  date:data.date,
			  description:data.program_description,
			  phone:data.phone,
			  url:data.register_url,
			  address:data.address,
			  location_name:data.location,
			  city:data.city
		  });
		  
		row = document.createElement("tr");
		//row.className = "event-"+data.code; //used to map calendar interactions to data output
		row.className = "event-row-" + moment(data.date).format('YYYY-MM-DD');//2014-03-27;
		td1 = document.createElement("td");
		
		td2 = document.createElement("td");
		td2.appendChild(document.createTextNode(""+data.date));
		
		td3 = document.createElement("td");
		tx3 = document.createTextNode("" + data.city + ", " +data.location);
		td3.appendChild(tx3); //Plain Text
		
		txt = document.createTextNode(""+data.title);
		lnkA = document.createElement("a");
		lnkA.href = data.register_url;
		//lnkA.id = "link-"+data.code;
		//lnkA.target = "_blank";
		lnkA.appendChild(txt);
		td1.appendChild(lnkA);

		row.appendChild(td1);
		row.appendChild(td2);
		row.appendChild(td3);
	
		$("#filter-results").append(row); //add objects to Document
		
		/* if modal ($.appOverlay) is enabled and activated, attach to the link */
		if(modalEnable && jQuery().appOverlay){
			
			$(lnkA).appOverlay(
				{ 	
				'type':'compiled',
				'speed':500,
				'width':590,
				
				compiledData:modalData,
				mapData:data
			});
		}
	  }
		
	};
	
	/* Generates the working data set.
		All events are combined with matching location & program data.
		Result data is then sorted by date
	 */
	var generate = function(){
		_.each(rmData.program_data, generateTopicsList, this);
		_.each(rmData.location_data, generateLocationsList, this);
		_.each(rmData.program_events, dataUnion);
		generatedData  = _.sortBy(generatedData, function(record){ return new Date(record.date); }); //sort generatedData by date
		console.log(generatedData);
	};

	/* Generate UNION of program data, location data, and event data
		Iterates through rmData.program_data, the adds merged data to filteredData
	 */
	var dataUnion = function (row) {
		_tmp = {}; // temporary obj to merge data into 
		
		try {
			prog = _.findWhere(rmData.program_data, {program_code : row.program_code});
		}catch(e){
			console.log("PROGRAM NOT FOUND FOR ", prog);
			prog= {program_code:'err', title: 'Program not found in data set'};
		}
		
		try {
			loca= _.findWhere(rmData.location_data, {location_code : row.location_code});			
		}catch(e){
			console.log("LOCATION NOT FOUND", e);
			loca= {location_code:'err', location: 'Location not found in data set'};
		}

		merge = _.extend(_tmp, prog, loca, row); //merge objects 
		generatedData.push(merge); // add to storage array
	};
	
	
	var generateTopicsList = function(data){
	  if(data != 'undefined' && data != null){
		li = document.createElement("li");
		lbl = document.createElement("label");
		div = document.createElement("div");
		txt = document.createTextNode(""+data.title);
		inp = document.createElement("input");
		inp.type = "checkbox";
		inp.value = data.program_code; //use program code as data value
		lbl.appendChild(inp); //add checkbox to label 
		div.appendChild(txt); //add textnode to div
		lbl.appendChild(div);
		li.appendChild(lbl);
		
		$("#filter-topic > ul").append(li); //add objects to Document
		eventTopics.push(lbl); //add to topics checkbox array
	  }
	};
	
	var generateLocationsList = function(data){
		replaced_loc = data.location_code.replace(/[0-9]/g, ''); //strip numbers from location codes (for multiple locations under same location name, ex: rockville1, rockvillle2 -> rockville
		locationInList = (_.indexOf(tmpLocations, replaced_loc) != -1); //check if already in list of locations
		
	  if((data != 'undefined') && (data != null) && !locationInList){
		li = document.createElement("li");
		lbl = document.createElement("label");
		div = document.createElement("div");
		txt = document.createTextNode(""+data.city);
		inp = document.createElement("input");
		inp.type = "checkbox";
		inp.value = replaced_loc; //use program code as data value
		lbl.appendChild(inp); //add checkbox to label 
		div.appendChild(txt); //add textnode to div
		lbl.appendChild(div);
		li.appendChild(lbl);
		
		$("#filter-location > ul").append(li); //add objects to Document
		eventTopics.push(lbl); //add to topics checkbox array
		tmpLocations.push(replaced_loc); //add location to list
	  }
	};
	
	var newMonth = function(month){
		filters.month = month;
	}
		
	return {
		"init": init,
		"filter": filter,
		"newMonth": newMonth,
		"eventsArray": generatedData,
		"month" : filters.month,
		"startDate" : startDate
	}
})();

	
$(function() {
	// Load RM Data, then init calendar	
	// ================================================================================
	$.getScript( "../includes/program-calendar-data.js" )
  .done(function( script, textStatus ) {
    rskm.init({
		  "modal":UseModal /* true = use modal window, false = use register link */
		  });
  })
  .fail(function( jqxhr, settings, exception ) {
    console.log( "Failed to load calendar data." );
});

});