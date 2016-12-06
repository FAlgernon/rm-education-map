/*
  create a basic content overlay on the screen
*/
(function( $ ){
		  
  $.fn.appOverlay = function( options ) {
	  //---------------------------------------------------------------
	  // jQuery app overlay v0.1
	  //---------------------------------------------------------------
	var $obj = this;
	var settings = {
	  url:false,
	  img:false,
	  width:0,
	  height:0,
	  scrolling:'auto',
	  speed:250,
	  compiledData:false,
	  mapData:false
	};
	var settings = $.extend(settings, options);

	this.createOverlay = function( data , type){
		
		$('body').append('<div id="overlay-app"><div id="overlay-contents"></div><div id="overlay-mask"></div></div>');
			
		
		$("#overlay-contents").html('');//clear contents
		
		if( settings.type == 'iframe' ){
			var iframe = document.createElement('iframe');
			iframe.setAttribute('src', data );
			iframe.setAttribute('width', settings.width);
			iframe.setAttribute('height', settings.height);
			iframe.setAttribute('scrolling', settings.scrollbars);
			$("#overlay-contents").delay(1500).append( iframe );//add iframe to view
			var iwidth = ( window.innerWidth - settings.width ) / 2 ;
			var iheight = ( window.innerHeight- settings.height ) / 2 ;

			$("#overlay-contents").css({'top' : iheight, 'left' : iwidth} );
			$("#overlay-app").fadeIn( settings.speed );//fade in view
						
		}
		
		if( type == 'image' || settings.type == 'LightBoxImage' ){
			$("#overlay-contents").css({'display':'none'} );
			var img = new Image();
			img.onload = function() {
				var iwidth = ( window.innerWidth - this.width ) / 2 ;
				var iheight = ( window.innerHeight - this.height ) / 2 ;
				
			  	$("#overlay-contents").css({'top' : iheight, 'left' : iwidth} );
				$("#overlay-contents").fadeIn( 500 );
			}
			
			img.onclick = function(){$obj.destroyOverlay();};
			
			img.src = data;
			$("#overlay-contents").append( img );
			$("#overlay-app").fadeIn( settings.speed );
		}
		
		if( settings.type =='compiled' ){
			$("#overlay-contents").append( settings.compiledData );//add iframe to view
			var iwidth = ( window.innerWidth - settings.width ) / 2 ;
			var iheight = ( window.innerHeight- $("#overlay-contents").height() ) / 2 ;

			$("#overlay-contents").css({'top' : iheight, 'left' : iwidth} );
			$("#overlay-app").fadeIn( settings.speed );//fade in view
			
			var searchAddr = settings.mapData.address +', '+  settings.mapData.city +', MD';
			
			$('#modal-map').gmap().bind('init', function() {
				$('#modal-map').gmap('search', { 'address': searchAddr }, function(results, status) {
					if ( status === 'OK' ) {
							//$('#modal-map').gmap('get', 'map').panTo(results[0].geometry.location);
							//console.log(results[0]);
							
						$('#modal-map').gmap('addMarker', {'position': results[0].geometry.location, 'bounds': true } );
						$('#modal-map').gmap('option', 'zoom', 13);
							//console.log(results[0].geometry.location);
					}else{
						//console.log(status);	
					}
				});
			
			}).click(function() {
				$('#modal-map').gmap('openInfoWindow', {'content': settings.mapData.location}, this);
			});
	}
		
	//bind close event
	$('#overlay-mask').on('click', function(){
		$obj.destroyOverlay();
	});

		
		//$("#overlay-contents").show( settings.speed );
		

	
  }
  
  this.destroyOverlay = function(){
	  
	//$("#overlay-contents").hide( settings.speed );
	$("#overlay-app").fadeOut( settings.speed, function(){								
		$("#overlay-app").remove();//remove from body  
														});
  }
  
  
	//each implementation
	this.each(function(){
		//settings.url = $(this).attr('href');//global issue
		
		$(this).click(function( event ){
			$_self = $(this);
			if( window.innerWidth > settings.width ) {
				event.preventDefault();//if wide enough for map, don't navigate to URL
				console.log("appOverlay");
				
				//$obj.createOverlay( ); //otherwise, create overlay
				$obj.createOverlay( $_self.attr("href"), $_self.attr("rel") );
			}else{
				//will navigate to page
			}
		});
		
	});
	


  }
})( jQuery );
var map;