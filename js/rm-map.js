/*
*      Placeholder for google map styles
*      https://mapstyle.withgoogle.com/
*/
if (typeof gmap_styles == 'undefined') 
    var gmap_styles = {}; //failed to load map styles


/*
*       RM Program Finder Main
*/
var rmProgramFinder = (function() {
    
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
        
        var app = angular.module('myApp', []);
        app.controller('myCtrl', function($scope) {
            $scope.firstName= "John";
            $scope.lastName= "Doe";
        });
        
        
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

        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        // a new Info Window is created
        //var infoWindow = new google.maps.InfoWindow();

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
    
    return {
		"init": init,
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