/* global jQuery */
( function( $ ){

	var VideoCarousel = {

		init: function( el ) {

			this.wrap = el;
			this.main_video = this.wrap.find( '[data-video-carousel-main_video]' );
			this.items = this.wrap.find( '[data-video-carousel-item]' );
			this.video_template = this.wrap.find( '[data-video-carousel-template]' ).html();
			this.current_item = this.items.eq(0);

			this.bindEvents();
		},

		bindEvents: function() {

			var self = this;
			this.items.on( 'click', function( e ){
				e.preventDefault();
				self.itemClicked( $( this ) );
			} );

		},

		itemClicked: function( el ) {
			if( el.is( this.current_item ) ) {
				return;
			}

			this.changeVideo( el );
		},

		changeVideo: function( el ) {

			this.current_item = el;
			var yt_id = el.data( 'yt-id' );

			this.items.removeClass( 'is-active' );
			el.addClass( 'is-active' );

			var video = this.video_template.replace( '[[YT_ID]]', yt_id );
			this.main_video.html( video );

		}

	};

	$( function(){

		$( '[data-video-carousel]' ).each( function() {
			Object.create( VideoCarousel ).init( $( this ) );
		} );


		$( window ).load( function() {
			var els = $('.home_recent_videos__video_strip__button__desc');
			els.css( 'max-height', '100%' );
			els.trunk8({
				lines: 2
			});
			els.css( 'max-height', '' );
		} );

	} );

} )( jQuery );