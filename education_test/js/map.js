var display_json = {events: [], locations: []}
var arrLocations = [], arrEvents = [];
var city = [], topic = [], dates = [], codes = [];
var map, infoWindow, mapOptions;
var globalLatLng;
var lookup = [];

function initialize() {
    "use strict";
    
    globalLatLng = new google.maps.LatLng(39.083362, -77.155253);
    
   mapOptions = {
      center: globalLatLng,
      zoom: 7,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      streetViewControl: false,
      scrollwheel: false
   };
   
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    
    // a new Info Window is created
    infoWindow = new google.maps.InfoWindow();
    
    // Event that closes the InfoWindow with a click on the map
    google.maps.event.addListener(map, 'click', function() {
        infoWindow.close();
    });
    
    updateInfoWindowStyle();
    
    //construct display_json from json
    json_reset();
    
    loadArrays();
    
    //init date picker
    initDatePick();
    
    //draw to events display
    draw(display_json);
    
    //sort arrays
    topic.sort();
    city.sort();
    codes.sort();
    
    //populate filter selects
    init_select($("#topic-select"), topic);
    init_select($("#location-select"), city);
    init_select($("#code-select"), codes);
    
    // Finally displayMarkers() function is called to begin the markers creation
    displayMarkers();
}

function updateInfoWindowStyle() {
    /*
     * The google.maps.event.addListener() event waits for
     * the creation of the infowindow HTML structure 'domready'
     * and before the opening of the infowindow defined styles
     * are applied.
     */
    google.maps.event.addListener(infoWindow, 'domready', function() {
        
        var closeBtn = '<span class="fa fa-times fa-fw fa-lg" aria-hidden="true" id="btnClose"></span>'
        
       // Reference to the DIV which receives the contents of the infowindow using jQuery
       var iwOuter = $('.gm-style-iw');

       /* The DIV we want to change is above the .gm-style-iw DIV.
        * So, we use jQuery and create a iwBackground variable,
        * and took advantage of the existing reference to .gm-style-iw for the previous DIV with .prev().
        */
       var iwBackground = iwOuter.prev();

       // Remove the background shadow DIV
       iwBackground.children(':nth-child(2)').css({'display' : 'none'});

       // Remove the white background DIV
       iwBackground.children(':nth-child(4)').css({'display' : 'none'});
        
        // Moves the infowindow 115px to the right.
        iwOuter.parent().parent().css({left: '64px'});

        // Moves the shadow of the arrow 76px to the left margin.
        iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 90px !important;'});

        // Moves the arrow 76px to the left margin.
        iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'left: 90px !important;'});

        // Changes the desired tail shadow color.
        iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'rgba(113, 157, 154, 0.6) 0px 1px 6px', 'z-index' : '1'});

        // Reference to the div that groups the close button elements.
        var iwCloseBtn = iwOuter.next();

        // Apply the desired effect to the close button
        iwCloseBtn.css({width: '20px', height: '20px', opacity: '1', right: '40px', top: '2px', border: '4px solid #B6D4D3', 'border-radius': '13px', 'box-shadow': '0 0 5px #9EC6C5', 'background-color': '#B6D4D3'});
        iwCloseBtn.html(closeBtn);

        // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
        if($('.iw-content').height() < 140){
          $('.iw-bottom-gradient').css({display: 'none'});
        }

        // The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
        iwCloseBtn.mouseout(function(){
          $(this).css({opacity: '1'});
        });

    });
}

function updateMap(json) {
    
    if(json.events.length <= 0) {
        updateMapOptions = {
          center: globalLatLng,
          zoom: 9,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          mapTypeControl: false,
          streetViewControl: false,
          scrollwheel: false
        };
        
        map = new google.maps.Map(document.getElementById("map"), updateMapOptions);
    }
    
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    
    // a new Info Window is created
    infoWindow = new google.maps.InfoWindow();
    
    // Event that closes the InfoWindow with a click on the map
    google.maps.event.addListener(map, 'click', function() {
        infoWindow.close();
    });
    
    //construct display_json from json
    json_reset();
    
    updateInfoWindowStyle();
    
    resetArrays();
    loadUpdatedArrays(json);
    
    //init date picker
    //initDatePick();
    
    //draw to events display
    draw(json);
    
    //sort arrays
    topic.sort();
    city.unique().sort();
    codes.sort();
    
    //populate filter selects
    init_select($("#topic-select"), topic);
    init_select($("#location-select"), city);
    init_select($("#code-select"), codes);
    
    // Finally displayMarkers() function is called to begin the markers creation
    if(json.events.length > 0) {
        displayMarkers();
    }
    
    
}

function searchMarkers(searchPos) {
	"use strict"; 
	
	for (var i = 0, l = lookup.length; i < l; i++) {
    	if (lookup[i][0] === searchPos[0] && lookup[i][1] === searchPos[1]) {
      		return false;
    	}
  	}
  return true;
}

function resetArrays() {
    arrLocations = [];
    arrEvents = [];
    //dates = [];
    codes = [];
    topic = [];
    city = [];
}

function loadArrays() {
    $.each(json.locations, function(i, obj) {
        arrLocations.push(obj);
    });
    
    $.each(json.events, function(i, obj) {
        arrEvents.push(obj);
    });
    
    for(var i = 0; i < arrEvents.length; i++) {
        dates.push(arrEvents[i].date);
        codes.push(arrEvents[i].code);
    }
    
    codes = codes.unique();
    //dates = dates.unique();
    
    for(var i = 0; i < arrLocations.length; i++) {
        city.push(parseAddress(arrLocations[i].address).state)
    }
    
    city = city.unique();
}

function loadUpdatedArrays(json) {
    $.each(json.locations, function(i, obj) {
        arrLocations.push(obj);
    });
    
    $.each(json.events, function(i, obj) {
        arrEvents.push(obj);
    });
    
    /*for(var i = 0; i < arrEvents.length; i++) {
        dates.push(arrEvents[i].date);
        codes.push(arrEvents[i].code);
    }
    
    codes = codes.unique();
    dates = dates.unique();
    
    for(var i = 0; i < arrLocations.length; i++) {
        city.push(parseAddress(arrLocations[i].address).state)
    }
    
    city = city.unique();*/
}

function initDatePick() {
    $('#datePicker').datepicker({
        format: 'mm/dd/yyyy',
        autoclose: true,
        todayHighlight: false,
        toggleActive: true,
        beforeShowDay: function(date){
            var d = date;
            var curr_date = d.getDate();
            var curr_month = d.getMonth() + 1; //Months are zero based
            var curr_year = d.getFullYear();
            if(curr_date < 10) {
                var formattedDate = curr_month + "/0" + curr_date + "/" + curr_year;
            } else {
                var formattedDate = curr_month + "/" + curr_date + "/" + curr_year;
            }
            
            if($.inArray(formattedDate, dates) !== -1) {
                return {
                    classes: 'activeDate'
                };
            }
            return;
        },
        clearBtn: true,
        
        autoClose: true
    });
    
    /*$(".clear").on("click", function() {
        console.log("clear");
        anyDate = true;
    })*/
    
    //$(".clear").html("Any Date");
   
    $('#datePicker').datepicker().on('clearDate', function(event){
        //
        console.log("clear date");
        
        
        //$("#date-select").data('datepicker').setDate(null);
        $("#date-select").val = "";
        $('#datePicker').datepicker('update','');
        
        event.stopPropagation();
        
        console.log("prop", event.isPropagationStopped());
        updateFilter();
        updateMap(display_json);

    });//*/
}

// This function will iterate over locations array
// creating markers with createMarker function
function displayMarkers() {
    var locationtemp = [];
    
    // this variable sets the map bounds and zoom level according to markers position
    var bounds = new google.maps.LatLngBounds();
    
     // For loop that runs through the info on markersData making it possible to createMarker function to create the marker
    for(var i = 0; i < arrLocations.length; i++) {
        var lat = arrLocations[i].coordinates.lat;
        var lng = arrLocations[i].coordinates.lng;
        var latlng = new google.maps.LatLng(lat, lng);
        var name = arrLocations[i].facility;
        var address = parseAddress(arrLocations[i].address)
        
        createMarker(latlng, name, address.city, address.state, address.zip, i);
        
        // Marker’s Lat. and Lng. values are added to bounds variable
        bounds.extend(latlng);
    }
    
    // Finally the bounds variable is used to set the map bounds
   // with API’s fitBounds() function
    //map.fitBounds(bounds);
}

// This function creates each marker and sets their Info Window content
function createMarker(latlng, name, address, state, zip, num) {
    var marker = new google.maps.Marker({
        map: map,
        position: latlng,
        title: name
    });
    
    // This event expects a click on a marker
   // When this event is fired the infowindow content is created
   // and the infowindow is opened
    google.maps.event.addListener(marker, 'click', function() {
        // Variable to define the HTML content to be inserted in the infowindow
        var iwContent = getIWContent(num, 0);
        
        map.setZoom(12);
        
        // including content to the infowindow
        infoWindow.setContent(iwContent);
        
        // opening the infowindow in the current map and at the current marker location
        infoWindow.open(map, marker);
        
    });
    
    google.maps.event.addListener(marker, 'mouseover', function() {
        var iwContent = getIWContent(num, 1);
        
        infoWindow.setContent(iwContent);
        
        infoWindow.open(map, marker);
    })
    
}

// function gets information from events that
// match location for marker
// and creates content for infowindow
function getIWContent(num, type) {
    var contentString = '';
    var mouse;
    
    if(type === 1) {
        mouse = true;
        contentString = '<div id="iw_container" style="font-family: Verdana, Arial, Helvetica, sans-serif">' +
            '<div class="iw_title">' + parseAddress(arrLocations[num].address).state + '</div>' +
            '<div class="iw-content"><div class="iw-subTitle">List of Classes:</div><ul class="classList">';
    } else {
        mouse = false;
        contentString = '<div id="iw_container" style="font-family: Verdana, Arial, Helvetica, sans-serif">' +
            '<div class="iw_title">' + arrLocations[num].facility + '</div>'  + 
            '<div class="iw-content">';
    }
    
    for(var i = 0; i < arrEvents.length; i++) {
        var positionName = arrEvents[i].location;
        
        if(arrLocations[num].locationName === positionName) {
            if(!mouse) {
                contentString = contentString +
                    '<div class="iw-subTitle">Date:</div> ' + arrEvents[i].date + '<br/>' +
					'<div class="iw-subTitle">Topic:</div> ' + arrEvents[i].topic + '<br/>' +
					'<div class="iw-subTitle">Code:</div> ' + arrEvents[i].code + '<br/><br/>' +
                    '<hr>';
            } else {
                contentString = contentString + 
					'<li>' + arrEvents[i].topic + '</li>';
            }
        } // end if location name = event location
    } // end for event length
    
    if(type === 1) {
		contentString = contentString + '</ul></div><br/> <p class="clickInfo">Click the marker for more information</p> </div>';
	} else {
		contentString = contentString + '</div><div class="iw-bottom-gradient"></div></div>';
	}
    
	return contentString; // return content for infowindow
} 

//parses address into street address, state and zip
function parseAddress(address) {
	"use strict";
	
    // Trim the address.
    address = address.trim();

    // Make an object to contain the data.
    var returned = {};

    // Find the comma.
    var comma = address.indexOf(',');

    // Pull out the city.
    returned.city = address.slice(0, comma);

    // Get everything after the city.
    var after = address.substring(comma + 2); // The string after the comma, +2 so that we skip the comma and the space.

    // Find the space.
    var space = after.lastIndexOf(' ');

    // Pull out the state.
    returned.state = after.slice(0, space);

    // Pull out the zip code.
    returned.zip = after.substring(space + 1);
	
	//returned.lat = lat;
	//returned.lng = lng;

    // Return the data.
    return returned;
}

Array.prototype.unique = function() {
	"use strict";
	
    var arr = [];
    for(var i = 0; i < this.length; i++) {
        if(!arr.contains(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr; 
};

Array.prototype.contains = function(v) {
	"use strict";
	
    for(var i = 0; i < this.length; i++) {
        if(this[i] === v) {return true;}
    }
    return false;
};

//creates the results located on the bottom of the page
function draw(json) {
	"use strict";
	
    //style="border-radius: 4px; height: 33px; width: 190px;"
    // wipe previous events display
    $('#event-col').html("");
    
    var counter = 1;
    for (var i = 0 ; i < json.events.length; i++) {
		var coord = -1;
		for(var j = 0; j < json.locations.length; j++) {
			var locName = json.locations[j].locationName;
			if(locName === json.events[i].location) {
				coord = j;
                break;
			}
		}
		
        var info = 
			"<hr><div class='row'><div class='col-md-1 text-center'><span class='fa fa-map-marker fa-4x' style='margin-top: 8px; color: #dc4b41;'></span></div>" + 
			"<div class='col-md-6' style='margin-left:35px;'><p style='margin-top: 8px; font-weight: bold;'>" + json.events[i].topic + " " + json.events[i].code +
			"</p><p>" + json.events[i].date + "</p><p>" + json.locations[coord].address + "</p></div><div style='margin-top: 15px;' class='col-md-4'>";
        
        switch(json.events[i].topic) {
            case "Legal Issues: Recurring Medical Malpractice Topics - Six Case Examples":
                info = info + "<a href='https://www.weinsuredocs.org/Prod/Risk?AM1rcA=16MMPHY&AAbfgA=01' target='_blank' class='btn btn-success btn-block'>Register</a>" +
                    "<a href='#' target='_blank' class='btn btn-info btn-block'>More Info</a></div></div>";
                break;
            case "HIPAA Revisited":
                info = info + "<a href='https://www.weinsuredocs.org/Prod/Risk?AM1rcA=16MMPHY&AAbfgA=01' target='_blank' class='btn btn-success btn-block'>Register</a>" +
                    "<a href='#' target='_blank' class='btn btn-info btn-block'>More Info</a></div></div>";
                break;
            case "Closed Claims Study: Anesthesia":
                info = info + "<a href='https://www.weinsuredocs.org/Prod/Risk?AM1rcA=16MMPHY&AAbfgA=01' target='_blank' class='btn btn-success btn-block'>Register</a>" +
                    "<a href='#' target='_blank' class='btn btn-info btn-block'>More Info</a></div></div>";
                break;
            case "Primary Care - Risk Management in a Nutshell":
                info = info + "<a href='https://www.weinsuredocs.org/Prod/Risk?AM1rcA=16MMPHY&AAbfgA=01' target='_blank' class='btn btn-success btn-block'>Register</a>" +
                    "<a href='#' target='_blank' class='btn btn-info btn-block'>More Info</a></div></div>";
                break;
            case "OB/GYN - Risk Management in a Nutshell":
                info = info + "<a href='https://www.weinsuredocs.org/Prod/Risk?AM1rcA=16MMPHY&AAbfgA=01' target='_blank' class='btn btn-success btn-block'>Register</a>" +
                    "<a href='#' target='_blank' class='btn btn-info btn-block'>More Info</a></div></div>";
                break;
            case "Surgery - Minimizing Risk":
                info = info + "<a href='https://www.weinsuredocs.org/Prod/Risk?AM1rcA=16MMPHY&AAbfgA=01' target='_blank' class='btn btn-success btn-block'>Register</a>" +
                    "<a href='#' target='_blank' class='btn btn-info btn-block'>More Info</a></div></div>";
                break;
            case "Ophthalmology - Eye Opening Risk Issues":
                info = info + "<a href='https://www.weinsuredocs.org/Prod/Risk?AM1rcA=16MMPHY&AAbfgA=01' target='_blank' class='btn btn-success btn-block'>Register</a>" +
                    "<a href='#' target='_blank' class='btn btn-info btn-block'>More Info</a></div></div>";
                break;
            case "Emergency Medicine (EMR Issues)":
                info = info + "<a href='https://www.weinsuredocs.org/Prod/Risk?AM1rcA=16MMPHY&AAbfgA=01' target='_blank' class='btn btn-success btn-block'>Register</a>" +
                    "<a href='#' target='_blank' class='btn btn-info btn-block'>More Info</a></div></div>";
                break;
            case "Pediatrics":
                info = info + "<a href='https://www.weinsuredocs.org/Prod/Risk?AM1rcA=16MMPHY&AAbfgA=01' target='_blank' class='btn btn-success btn-block'>Register</a>" +
                    "<a href='#' target='_blank' class='btn btn-info btn-block'>More Info</a></div></div>";
                break;
            default: 
                info = info + "<a href='https://www.weinsuredocs.org/Prod/Risk?AM1rcA=16MMPHY&AAbfgA=01' target='_blank' class='btn btn-success btn-block'>Register</a>" +
                    "<a href='#' target='_blank' class='btn btn-info btn-block'>More Info</a></div></div>";
                break;
        }
        
        $('#event-col').append(info);
        

        counter++;
    }
    
    if (json.events.length === 0) {
        var infoNone = "<hr><div class='row'><div class='col-md-12'><h3>No results matched...</h3></div></div>";

        $('#event-col').append(infoNone);
    }
}

//resets display_json back to original JSON file
function json_reset() {
    "use strict";
	
    //reset display_json back to initial json
    display_json = {events: [], locations: []};
    for (var i = 0; i < json.events.length; i++) {
		
        display_json.events.push(json.events[i]);
					
        // determine filter options    
        if (!topic.includes(json.events[i].topic)) {
            topic.push(json.events[i].topic);
        }
        
        topic = topic.unique();
        
        //if (!arrLocations.includes(json.locations[coord].coordinates)) {
        //    arrLocations.push(json.locations[coord].coordinates);
        //}
        
        if (!codes.includes(json.events[i].code)) {
            codes.push(json.events[i].code);
        }
        
        codes = codes.unique();
    }
    
    for(var i = 0; i < json.locations.length; i++) {
        display_json.locations.push(json.locations[i])
        city.push(parseAddress(json.locations[i].address).state)
    }
    
    city = city.unique();
}

function init_select(element, arr) {
	"use strict";
	
    for (var i = 0; i < arr.length; i++) {
        element.append("<option>" + arr[i] + "</option>");
    }
}

//determines filter options and the results of the filters
function filter(json, type, filter) {
	"use strict";
    
    var new_json = {events: [], locations: []};
		for (var i = 0; i < json.events.length; i++) {
			
			var coord;
			for(var j = 0; j < json.locations.length; j++) {
				if(json.locations[j].locationName === json.events[i].location) {
					coord = j;
				}
			}
			
			if (type === "date") {
				
				var select_date = Date.parse(filter);
				var compare_date = Date.parse(json.events[i].date);
				if (compare_date === select_date) {
					new_json.events.push(json.events[i]);
					if(!new_json.locations.hasOwnProperty(json.locations[coord])){
						new_json.locations.push(json.locations[coord]);
					}
				}
			} else if( type === "location") {
				var select_state = filter;
				var compare_state = parseAddress(json.locations[coord].address).state;
				if(compare_state === select_state) {
					new_json.events.push(json.events[i]);
					if(!new_json.locations.hasOwnProperty(json.locations[coord])){
						new_json.locations.push(json.locations[coord]);
					}
				}
            } else if (type === "topic") {
                var select_topic = filter;
                var compare_topic = json.events[i].topic;
                if(compare_topic === select_topic) {
                    new_json.events.push(json.events[i]);
                    if(!new_json.locations.hasOwnProperty(json.locations[coord])) {
                        new_json.locations.push(json.locations[coord]);
                    }
                }
			} else if (json.events[i][type] === filter) {
				new_json.events.push(json.events[i]);
				if(!new_json.locations.hasOwnProperty(json.locations[coord])){
						new_json.locations.push(json.locations[coord]);
					}
			}
		}
		
    return new_json;
}

//Updates display_json for any filter changes.
function updateFilter() {
    if ($("#date-select").val() !== "Any" && $("#date-select").val() !== "") {
        display_json = filter(display_json, "date", $("#date-select").val());
    }
    
    if ($("#topic-select").val() !== "Any") {
        display_json = filter(display_json, "topic", $("#topic-select").val());
    }
    
    if ($("#location-select").val() !== "Any") {
        display_json = filter(display_json, "location", $("#location-select").val());
    }
    
    if ($("#code-select").val() !== "Any") {
        display_json = filter(display_json, "code", $("#code-select").val());
    }
}

$("#all-filters").change(function(event) {
    "use strict";
	
    console.log("redraw");
    json_reset();
    var date = false;
    var topic = false;
    var location = false;
    var code = false;
    var date_select = "";
    var topic_select = "";
    var location_select = "";
    var code_select = "";
	
	updateFilter();
    
    updateMap(display_json);
    //draw(display_json);
	
    
});






