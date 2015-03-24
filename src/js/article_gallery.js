/* global jQuery */
( function( $ ){

	$( function(){

		var images = $('');

		$( 'a:has(img[class*="wp-image"])' ).each( function() {

			var anchor = $( this ),
				a_url = anchor.attr( 'href' );

			if( a_url.indexOf( '.jpg' ) > -1 || a_url.indexOf( '.jpeg' ) > -1 || a_url.indexOf( '.png' ) > -1 || a_url.indexOf( '.svg' ) > -1 || a_url.indexOf( '.gif' ) > -1 ) {
				images = images.add( anchor );
			}

		} );

		$( '.gallery' ).each( function() {

			var gallery = $( this ),
				gallery_id = gallery.attr( 'id' ),
				gallery_items = gallery.find( 'a' );

			gallery_items.each( function() {
				var item = $( this ),
					a_url = item.attr( 'href' );

				if( a_url.indexOf( '.jpg' ) > -1 || a_url.indexOf( '.jpeg' ) > -1 || a_url.indexOf( '.png' ) > -1 || a_url.indexOf( '.svg' ) > -1 || a_url.indexOf( '.gif' ) > -1 ) {
					item.attr( 'rel', gallery_id );
					images = images.add( item );
				}
			} );

		} );

		$( images ).fancybox( {
			'padding': 0,
			'margin': 0
		} );

	} );

} )( jQuery );