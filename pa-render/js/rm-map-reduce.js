/*
*      Placeholder for google map styles
*      https://mapstyle.withgoogle.com/
*/
if (typeof gmap_styles === 'undefined') {
    var gmap_styles = {}; //failed to load map styles
}

/*
*       gMap
*/
var gMap = (function() {
	
	/* GMap references */
    var map = [];
	var infoWindow = [];
	var markers = [];
	var _locations = [];
	var mapCenter = new google.maps.LatLng(39.083362, -77.155253);
	
	/* Datepicker references */
	var dates = [];
	
    /*
    *       RM App Init
    */
    
    var init = function(){
        gmap_init(gmap_styles);
    }

    /*
    *       Initialize Google Map
    */
    var gmap_init = function(gmap_styles) {
        "use strict";
		
       var mapOptions = {
          center: mapCenter,
          zoom: 7,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          mapTypeControl: false,
          streetViewControl: false,
          scrollwheel: false,
          styles: gmap_styles
       };

        map = new google.maps.Map(document.getElementById("map"), mapOptions);

        infoWindow = new google.maps.InfoWindow();
    
		// Event that closes the InfoWindow with a click on the map
		google.maps.event.addListener(map, 'click', function() {
			infoWindow.close();
		});
    }
    
	// This function will iterate over locations array
	// creating markers with createMarker function
	function displayMarkers(locations) {
		//console.log("display markers " , locations);
		_locations = locations;
		
		// this variable sets the map bounds and zoom level according to markers position
		var bounds = new google.maps.LatLngBounds();

		 // For loop that runs through the info on markersData making it possible to createMarker function to create the marker
		for(var i = 0; i < locations.length; i++) {
			var lat = locations[i].coordinates.lat;
			var lng = locations[i].coordinates.lng;
			var latlng = new google.maps.LatLng(lat, lng);
			var name = locations[i].facility;
			var address = parseAddress(locations[i].address);
			_locations[i]._address = address;
			_loc = locations[i]; //locations filter reference for binding to map marker
			createMarker(latlng, name, address.city, address.state, address.zip, i, _loc); //add a marker
			bounds.extend(latlng); //size map to fit marker
		}
		
		//fit to bounds if more than one marker
	   if(locations.length>1){
			map.fitBounds(bounds);
	   }else if(locations.length>0){
		   //center map on single marker
			map.setCenter(latlng)   
	   }
	   
	   
	}
	
	// creates each marker and sets their Info Window content
	function createMarker(latlng, name, address, state, zip, num, _loc) {
		var marker = new google.maps.Marker({
			map: map,
			position: latlng,
			title: name
		});
		
	   // on click marker - open info window
		google.maps.event.addListener(marker, 'click', function() {
			// Variable to define the HTML content to be inserted in the infowindow
			var iwContent = getIWContent(num, 0);
			
			map.setZoom(12);
			
			// including content to the infowindow
			infoWindow.setContent(iwContent);
			map.setCenter(marker.getPosition());
			
			
			//get to angular ref
			var scope = angular.element($("#map-container")).scope();
				//update angular location to match selected on map.
				scope.$apply(function(num){
					scope.search.location = _loc;
				});

				// close info window / clear location filter
				google.maps.event.addListener(infoWindow, 'closeclick', function(){
					map.setZoom(7);
					map.setCenter(mapCenter);
					
					//clear location selection
					scope.$apply(function(num){
						scope.search.location = null;
					});
				});
				
				
			// opening the infowindow in the current map and at the current marker location
			infoWindow.open(map, marker);

		});
		
		
		// mouseover event on map marker
		google.maps.event.addListener(marker, 'mouseover', function() {
			var iwContent = getIWContent(num, 1);
			
			infoWindow.setContent(iwContent);
			
			infoWindow.open(map, marker);
		});
		
		markers.push(marker);
		
	}
	
	// update map with new markers
	function updateMap(locations){
		deleteMarkers();
		displayMarkers(locations);
		
	}
	
	// Sets the map on all markers in the array.
      function setMapOnAll(map) {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
        }
      }
	  
	 // Removes the markers from the map, but keeps them in the array.
      function clearMarkers() {
        setMapOnAll(null);
      }
	  
	 // Shows any markers currently in the array.
      function showMarkers() {
        setMapOnAll(map);
      }

      // Deletes all markers in the array by removing references to them.
      function deleteMarkers() {
        clearMarkers();
        markers = [];
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
            '<div class="iw_title">' + _locations[num]._address.state + '</div>' +
            '<div class="iw-content"><div class="iw-subTitle">' + _locations[num].facility + '<br>' + _locations[num].numEvts + ' Event' + (_locations[num].numEvts>1?'s':'') + '</div>' ;
    } else {
        mouse = false;
        contentString = '<div id="iw_container" style="font-family: Verdana, Arial, Helvetica, sans-serif">' +
            '<div class="iw_title">' + _locations[num].facility + '<br>' + _locations[num].address +  '</div>'  + 
            '<div class="iw-content">';
    }
    
    if(type === 1) {
		//contentString = contentString + '</ul></div><br/> <p class="clickInfo">Click the marker for more information</p> </div>';
	} else {
		//contentString = contentString + '</div><div class="iw-bottom-gradient"></div></div>';
	}
    
	return contentString; // return content for infowindow
} 
    
    //parses address into street address, state and zip
    var parseAddress = function(address) {
        "use strict";
        address = address.trim();
        var returned = {};
        var comma = address.indexOf(',');
        returned.city = address.slice(0, comma);
        var after = address.substring(comma + 2); // The string after the comma, +2 so that we skip the comma and the space.
        var space = after.lastIndexOf(' ');
        returned.state = after.slice(0, space);
        returned.zip = after.substring(space + 1);
        //returned.lat = lat;
        //returned.lng = lng;
        return returned;
    }
    
	// unused - return array without duplicate items
    var getUnique = function(data, opt){
        var uniqueData = [];
        for(var i = 0; i < data.length; i++) {
            var m = (opt === undefined) ? data[i] : data[opt];
            if(!uniqueData.contains(m)) {
                uniqueData.push(m);
            }
        }
    } 
    
	// parse all the addresses in an array of addresses
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
		"displayMarkers" : displayMarkers,
		"updateMap" : updateMap
    }
    
})();