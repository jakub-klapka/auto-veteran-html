/* global jQuery */
( function( $ ){

	$( window ).load( function () {

		var slider = $( '#nivo_slider' );
		slider.find( 'img[data-src]' ).each( function(){
			var t = $( this );
			t.attr( 'src', t.data( 'src' ) );
		} );

		slider.nivoSlider({
			effect: 'fade',               // Specify sets like: 'fold,fade,sliceDown'
			slices: 1,
			animSpeed: 1000,                 // Slide transition speed
			pauseTime: slider.data('timeout'),                // How long each slide will show
			directionNav: true,             // Next & Prev navigation
			controlNav: false,               // 1,2,3... navigation
			controlNavThumbs: false,        // Use thumbnails for Control Nav
			pauseOnHover: true,             // Stop animation while hovering
			manualAdvance: false,           // Force manual transitions
			prevText: 'Prev',               // Prev directionNav text
			nextText: 'Next',               // Next directionNav text
			randomStart: false             // Start on a random slide
		});

	} );

} )( jQuery );