/*
*      Placeholder for google map styles
*      https://mapstyle.withgoogle.com/
*/
if (typeof gmap_styles === 'undefined') {
    var gmap_styles = {}; //failed to load map styles
}


/*
*       RM Program Finder Main
*/
var rmProgramFinder = (function() {
	
	/* GMap references */
    var map = [];
	var infoWindow = [];
	
    /*
    *       RM App Init
    */
    
    var init = function(){
        /*$.getJSON("data/gmap-styles.json", function(json) {
            console.log(json);
            gmap_init(json);
        });*/
        gmap_init(gmap_styles);
        filters_init();
       // eventData = events;
        //console.log(eventData);
        
        
        
        
    }

    /*
    *       Initialize Google Map
    */
    var gmap_init = function(gmap_styles) {
        "use strict";

       var globalLatLng = new google.maps.LatLng(39.083362, -77.155253);

       var mapOptions = {
          center: globalLatLng,
          zoom: 7,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          mapTypeControl: false,
          streetViewControl: false,
          scrollwheel: false,
          styles: gmap_styles
       };

        map = new google.maps.Map(document.getElementById("map"), mapOptions);

        // a new Info Window is created
        infoWindow = new google.maps.InfoWindow();
    
		// Event that closes the InfoWindow with a click on the map
		google.maps.event.addListener(map, 'click', function() {
			infoWindow.close();
		});
		
		

        //updateInfoWindowStyle();
        //updateMapOnInfoClose();

        //construct display_json from json
        //json_reset();

        //loadArrays();

        //init date picker
        //initDatePick();

        //draw to events display
        //draw(display_json);

        //sort arrays
        //topic.sort();
        //city.sort();
        //codes.sort();

        //populate filter selects
        //init_select($("#topic-select"), topic);
        //init_select($("#location-select"), city);
        //init_select($("#code-select"), codes);

        // Finally displayMarkers() function is called to begin the markers creation
        //displayMarkers();
    }
    
    var filters_init = function(){
        datePicker_init();
        //other filters bind change
    }
	
	
	// This function will iterate over locations array
	// creating markers with createMarker function
	function displayMarkers(locations) {
		//console.log("display markers " , locations);
		var locationtemp = [];
		
		// this variable sets the map bounds and zoom level according to markers position
		var bounds = new google.maps.LatLngBounds();
		
		 // For loop that runs through the info on markersData making it possible to createMarker function to create the marker
		for(var i = 0; i < locations.length; i++) {
			var lat = locations[i].coordinates.lat;
			var lng = locations[i].coordinates.lng;
			var latlng = new google.maps.LatLng(lat, lng);
			var name = locations[i].facility;
			var address = parseAddress(locations[i].address)
			
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
			//var iwContent = getIWContent(num, 0);
			
			map.setZoom(12);
			
			// including content to the infowindow
			//infoWindow.setContent(iwContent);
			
			// opening the infowindow in the current map and at the current marker location
			infoWindow.open(map, marker);
			
		});
		
		google.maps.event.addListener(marker, 'mouseover', function() {
			//var iwContent = getIWContent(num, 1);
			
			//infoWindow.setContent(iwContent);
			
			infoWindow.open(map, marker);
		})
		
	}
    
    
    /*
    *   Initialize DatePicker
    */
    
    var datePicker_init = function(){
        var dates = [];
        $('#date-select').datepicker({
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
    
    //parses address into street address, state and zip
    var parseAddress = function(address) {
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
    
    var getUnique = function(data, opt){
        var uniqueData = [];
        for(var i = 0; i < data.length; i++) {
            var m = (opt === undefined) ? data[i] : data[opt];
            if(!uniqueData.contains(m)) {
                uniqueData.push(m);
            }
        }
    } 
    
    var parseAddresses = function(data){
        var tmpData = [];
        for(var i=0; i<data.length;i++){
            var parsed = parseAddress(data[i].address);
            if(!tmpData.contains(parsed.city))
            tmpData.push(parsed.city);
        }
        return tmpData;
    }
    
    return {
		"init": init,
        "parseAddresses" : parseAddresses,
        "getUnique" : getUnique,
		"displayMarkers" : displayMarkers
    }
    
})();


/*
*   Document ready
*/
$(function() {
	// Load RM Data, then init calendar	
	// ================================================================================
    //	$.getScript( "../includes/program-calendar-data.js" )
    //  .done(function( script, textStatus ) {
    //    rskm.init({
    //		  "modal":UseModal /* true = use modal window, false = use register link */
    //		  });
    //  })
    //  .fail(function( jqxhr, settings, exception ) {
    //    console.log( "Failed to load calendar data." );
    //  });
    
    
    
    rmProgramFinder.init();
    

});