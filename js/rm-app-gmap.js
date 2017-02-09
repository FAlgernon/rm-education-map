/**
*      Placeholder for google map styles
*      https://mapstyle.withgoogle.com/
*/
if (typeof gmap_styles === 'undefined') {
    var gmap_styles = {}; //failed to load map styles
}

/**
* gMap
* Controls and maintains Google Map object methods & references
* @returns { init | updateMap }
*/
var gMap = (function() {
	"use strict";
	
	/* GMap references */
    var map = [];
	var infoWindow = null;
	var markers = [];
	var _locations = [];
	var mapCenter = new google.maps.LatLng(39.083362, -77.155253);
	var zoomLevelOnSingle = 12; //zoom level when displaying single marker
	var zoomLevelDefault = 7; // start zoom level
	
    /**
    * Public Init
    */
    var init = function(){
        gmap_init(gmap_styles);
    };

    /**
    * Initialize Google Map
    */
    var gmap_init = function(gmap_styles) {
		
       var mapOptions = {
          center: mapCenter,
          zoom: zoomLevelDefault,
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
    };
    
	/**
    * Display Markers for locations
	* @param {Array} locations - Array of Location Objects
	* @param {Object} locations.coordinates - latitude & Longitutde
	* @param {String} locations.facility - display name of location
	* @param {String} locations.address - Street address of location
    */
	function displayMarkers(locations) {
		_locations = locations;
		var latlng = null;
		
		//sets the map bounds and zoom level according to markers position
		var bounds = new google.maps.LatLngBounds();
		
		for(var i = 0; i < locations.length; i++) {
			var lat = locations[i].coordinates.lat;
			var lng = locations[i].coordinates.lng;
			latlng = new google.maps.LatLng(lat, lng);
			var name = locations[i].facility;	
			var _loc = locations[i]; //locations filter reference for binding to map marker
			createMarker(latlng, name, i, _loc); //add a marker
			bounds.extend(latlng); //size map to fit marker
		}
		
		//fit to bounds if more than one marker
	   if(locations.length>1){
			map.fitBounds(bounds);
	   }else if(locations.length>0){
		   //center map on single marker
			map.setCenter(latlng);
		   	map.setZoom(zoomLevelOnSingle);
	   }
	}
	
	/**
    * Adds a marker to markers[] Array
	* Sets marker infoWindow event listeners
    */
	function createMarker(latlng, name, num, _loc) {
		var marker = new google.maps.Marker({
			map: map,
			position: latlng,
			title: name
		});
		
	   // on click marker - open info window
		google.maps.event.addListener(marker, 'click', function() {
			// set HTML content to be inserted in the infowindow
			var iwContent = getIWContent(num, 0);
			
			map.setZoom(zoomLevelOnSingle);
			
			// including content to the infowindow
			infoWindow.setContent(iwContent);
			map.setCenter(marker.getPosition());
			
			
			//set angular ref
			var scope = angular.element($("#map-container")).scope();
				//update angular location to match selected on map.
				scope.$apply(function(num){
					scope.search.location = _loc;
				});

				// close info window / clear location filter
				google.maps.event.addListener(infoWindow, 'closeclick', function(){
					map.setZoom(zoomLevelDefault);
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

	
	/**
    * Update map with new markers
	* @param {Array} locations - Array of Location Objects
    */
	function updateMap(locations){
		deleteMarkers();
		displayMarkers(locations);
	}
	
	/**
    * Sets the map on all markers in the array.
	* @param {Object} map - Google map
    */
	function setMapOnAll(map) {
		for (var i = 0; i < markers.length; i++) {
		  markers[i].setMap(map);
		}
	}
	   
	/**
    * Removes markers from map
    */
	function clearMarkers() {
		if(isInfoWindowOpen(infoWindow)){
			infoWindow.close();
		}
		setMapOnAll(null);
	}

	/**
    * Deletes all markers in the array by removing references to them.
    */ 
	function deleteMarkers() {
		clearMarkers();
		markers = [];
	}
    
	/**
	* Creates content for infowindow
	* @param {Integer} num - Location index
	* @param {Integer} type - info window type
	* @returns {String}
    */
	function getIWContent(num, type) {
		var contentString = '';

		if(type === 1) {
			contentString = '<div id="iw_container" style="font-family: Verdana, Arial, Helvetica, sans-serif">' +
				'<div class="iw_title">' + _locations[num].components.city + ", " + _locations[num].components.state + '</div>' +
				'<div class="iw-content"><div class="iw-subTitle">' + _locations[num].facility + '<br>' + _locations[num].numEvts + ' Event' + (_locations[num].numEvts>1?'s':'') + '</div>' ;
		} else {
			contentString = '<div id="iw_container" style="font-family: Verdana, Arial, Helvetica, sans-serif">' +
				'<div class="iw_title">' + _locations[num].facility + '<br>' + _locations[num].address +  '</div>'  + 
				'<div class="iw-content">';
		}

		return contentString;
	}
	
	/**
    * Check if infoWindow is open or set
	* @param {Object} infoWindow - infoWindow reference
	* @returns {Boolean}
    */
	function isInfoWindowOpen(infoWindow){
		if(infoWindow===null){
			return false;
		}

		var map = infoWindow.getMap();
		return (map !== null && typeof map !== "undefined");
	}
    
    return {
		"init": init,
		"updateMap" : updateMap
    };
    
})();