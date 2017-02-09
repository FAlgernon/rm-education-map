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
                     <select name="location_select" id="location-select" class="form-control shadow" data-live-search="true" ng-model="search.location" ng-options="location.facility group by location.components.city for location in eventData.locations | orderBy:'components.city'">
                        <option value="" ng-selected="true">Any</option>
                    </select>
                    
                </div>

                <!-- Search Code Filter -->
                <div class="form-group">
                    <label>Code</label>
                    <select name="code_select" id="code-select" class="form-control shadow" data-live-search="true" ng-model="search.code" ng-options="event.code for event in eventData.events | orderBy:'code'">
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
    <script src="//maps.googleapis.com/maps/api/js?key=AIzaSyDLahhfoVtxfV4AIjS-3v8MXCb-zn2ggH8&callback=google_init"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="js/angular.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-sanitize.js"></script>
    <script src="js/ui-bootstrap-tpls-2.3.2.min.js"></script><!--templates customized-->
    <script src="<?php echo $gmap_styles; ?>"></script>
    <script src="js/rm-app-gmap.js"></script> 
    <script src="js/rm-app.js"></script>

</body>
</html>