/*---------------------------------------------------------------
 jQuery app overlay v0.11
 create a basic content overlay on the screen
/*---------------------------------------------------------------*/
(function( $ ){
	
	$.appOverlay = function( options ){
		var defaults = {
		  url:false,
		  img:false,
		  width:false,
		  height:false,
		  scrolling:'auto',
		  type:'include',
		  speed:250,
		  appCustom:false
		},
		plugin = this,
		options = options || {},
		$ref;
			
		plugin.init = function () {
            var settings = $.extend({}, defaults, options);
            $.data(document, 'appOverlay', settings);
			$ref = $.fn.appOverlay(options);
			$ref.createOverlay(settings.url, settings.type);
        };
		
		plugin.init();
		
	};
	 
  $.fn.appOverlay = function( options ) {

	var $obj = this;
	var settings = {
	  url:false,
	  img:false,
	  width:false,
	  height:false,
	  padding:10,
	  scrolling:'auto',
	  speed:250,
	  appCustom:false
	};
	
	settings = $.extend(settings, options);

	this.createOverlay = function( url , type){
		
		var iwidth, iheight;
		
		$('body').append('<div id="overlay-app"><div id="overlay-contents"></div><div id="overlay-mask"></div></div>');
			
		
		$("#overlay-contents").html('');//clear contents
		
		if( type === 'iframe' ){
			var iframe = document.createElement('iframe');
			iframe.setAttribute('src', url );
			iframe.setAttribute('width', settings.width);
			iframe.setAttribute('height', settings.height);
			iframe.setAttribute('scrolling', settings.scrollbars);
			iframe.setAttribute('frameborder', 0);
			
			iwidth = ($(window).innerWidth() - settings.width) / 2 ;
			iheight = ($(window).innerHeight() * 0.5 ) - ( settings.height * 0.5 ) ;
			
			if( settings.appCustom ){
				$("#overlay-contents").append('<div id="app-custom-wrapper"><a id="appOverlay-close" href="" > <i>x</i> </a><br></div>');//add iframe to view
				$("#app-custom-wrapper").append(iframe);
				iheight = ($(window).innerHeight() * 0.5 ) - ( $("#overlay-contents").height() * 0.5 ) ;
			}else{
				$("#overlay-contents").delay(1500).append(iframe);//add iframe to view
				("#overlay-contents").css({'top' : iheight, 'left' : iwidth} );
			}
			
			
			
			
			
			$
			//$("#overlay-contents").css({'top' : '10%', 'left' : 'auto' , 'height' : '80vh', 'width' : settings.width + 'px' });
			$("#overlay-contents").css('width',settings.width + 'px');
			
			$("#overlay-app").fadeIn( settings.speed );//fade in view
			$("#appOverlay-close").click(function(){
				event.preventDefault();
				$obj.destroyOverlay();
			});
						
		}
		
		if( type === 'include' ){
			$.get( url , function( data ) {
			  $("#overlay-contents").append( data );//add iframe to view
			  $("#appOverlay-close").click(function(){$obj.destroyOverlay();});
			});
			
				iwidth = ($(window).innerWidth() - settings.width) / 2 ;
				iheight = ($(window).innerHeight() - settings.height) / 2 ;

			$("#overlay-contents").css({'top' : iheight, 'left' : iwidth} );
			
			$("#overlay-app").fadeIn( settings.speed );//fade in view
		}
		
		if( type === 'image' || type === 'LightBoxImage' ){
			var loadingImg = new Image();
			loadingImg.src = '/images/icons/loading.gif';
			var img = new Image();
			img.onclick = function(){$obj.destroyOverlay();};
			img.onload = function() {
				//$("#overlay-contents").css({'display':'none'} );
				$("#overlay-contents").html('');
				$("#overlay-contents").append( img );
				var iwidth,iheight;
				
				var winwidth = $(window).innerWidth() - 100;
				var winheight = $(window).innerHeight() -100;
				var initialWidth = img.naturalWidth;
				var initialHeight = img.naturalHeight;
				var resizedWidth = img.naturalWidth;
				var resizedHeight = img.naturalHeight;
				
				var scale = 1;
									
				if(initialWidth > winwidth){
					scale = 1 - ( (resizedWidth - winheight) / resizedWidth );
					resizedWidth = resizedWidth * scale;
					resizedHeight = resizedHeight * scale;
				}
				
				if(initialHeight > winheight ){
					scale = 1 - ((resizedHeight - winheight)/resizedHeight);
					resizedWidth = resizedWidth * scale;
					resizedHeight = resizedHeight * scale;
				}

				
				iwidth = ($(window).innerWidth() - resizedWidth) / 2 ;
				iheight = ($(window).innerHeight() - resizedHeight) / 2 ;

				img.width=resizedWidth;
				img.height=resizedHeight;
				
			  	$("#overlay-contents").delay(50).css({
					'top' : iheight,
					'left' : iwidth
					} ).fadeIn( 500 );
			};
			img.src = url;
			$("#overlay-contents").append(loadingImg);
			$("#overlay-app").fadeIn( settings.speed );

		}
		
	//bind close event
	$('#overlay-mask').on('click', function(){
		$obj.destroyOverlay();
	});

  };
  
  this.destroyOverlay = function(){
	$("#overlay-app").fadeOut( settings.speed, function(){								
		$("#overlay-app").remove();//remove from body  
														});
  };
  
	//each implementation
	this.each(function(){
		$(this).click(function( event ){
			var $_self = $(this);
			if( $(window).innerWidth() > settings.width ) {
				//event.preventDefault();//if wide enough for map, don't navigate to URL
				if(event.preventDefault){event.preventDefault();}else{event.returnValue = false;}
				$obj.createOverlay( $_self.attr("href"), $_self.attr("rel") );
			}else{
				//will navigate to page
			}
		});
		
	});
	
	return {
		createOverlay: $obj.createOverlay
		};


  };
})( jQuery );

//add in the rel triggers for images
$(document).ready(function(){
	$('a[rel=LightBoxImage]').appOverlay(
		{ 	'type':'image',
			'speed':500
		  }
	);
});