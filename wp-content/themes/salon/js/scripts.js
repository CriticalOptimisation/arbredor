var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

jQuery(window).on("load", function() {
	"use strict";

	/* -----------------------------------------
	 FlexSlider Init
	 ----------------------------------------- */
	var homeSlider = jQuery( '#home-slider' );
	if ( homeSlider.length ) {
		homeSlider.flexslider( {
			animation     : ThemeOption.slider_effect,
			direction     : ThemeOption.slider_direction,
			slideshow     : Boolean( ThemeOption.slider_autoslide ),
			slideshowSpeed: Number( ThemeOption.slider_speed ),
			animationSpeed: Number( ThemeOption.slider_duration ),
			prevText      : '',
			nextText      : '',
			directionNav  : true,
			controlNav    : true,
			start         : function( slider ) {
				slider.removeClass( 'loading' );
			},
			after: function( slider ) {
				var currentSlide = slider.slides.eq( slider.currentSlide );
				currentSlide.siblings().each( function() {
					var src = jQuery( this ).find( 'iframe' ).attr( 'src' );
					jQuery( this ).find( 'iframe' ).attr( 'src', src );
				} );
			}
		} );
	}

	/* -----------------------------------------
	Isotope / Masonry
	----------------------------------------- */
	var $container = jQuery('.list-masonry'),
			$filters = jQuery('.filters-nav');

	$container.each(function() {
		jQuery(this).isotope();
	});

	if ( $filters.length ) {
		$filters.each( function() {
			var $filterSet = jQuery( this ),
				$filterLinks = $filterSet.find( 'a' );

			$filterLinks.click( function(e) {
				var $that = jQuery(this),
					$selector = $that.attr('data-filter');

				if ( $that.parents('.event-list').length ) {

					$filterSet.find('.selected').removeClass('selected');
					$that.addClass('selected');

					$filterSet
						.parents('.event-list')
						.find('.list-masonry')
						.isotope({
							filter : $selector,
							animationOptions: {
								duration: 750,
								easing  : 'linear',
								queue   : false
							}
						});

				} else {
					var selector = jQuery(this).attr('data-filter');
					jQuery(this).parent().siblings().find('a').removeClass('selected');
					jQuery(this).addClass("selected");

					$container.isotope({
						filter: selector,
						animationOptions: {
							duration: 750,
							easing  : 'linear',
							queue   : false
						}
					});
				}

				e.preventDefault();
			});

		});
	}

	/* -----------------------------------------
	 Equalize Heights
	 ----------------------------------------- */
	jQuery(".item-list").find("div[class^='col']").matchHeight();
});

jQuery(document).ready(function($) {
	"use strict";

	/* -----------------------------------------
	 Responsive Menus Init with mmenu
	 ----------------------------------------- */
	var mainNav = $("#navigation"),
		mobileNav = $("#mobilemenu");

	mainNav.clone().removeAttr('id').removeClass().appendTo(mobileNav);
	mobileNav.find('li').removeAttr('id');

	mobileNav.mmenu({
		offCanvas: {
			position: 'top',
			zposition: 'front'
		},
		"autoHeight": true,
		"navbars": [
			{
				"position": "top",
				"content": [
					"prev",
					"title",
					"close"
				]
			}
		],
		extensions: ["theme-dark"]
	});

	/* -----------------------------------------
	 Main Navigation Init
	 ----------------------------------------- */
	$('#navigation').superfish({
		delay      : 300,
		animation  : { opacity: 'show', height: 'show' },
		speed      : 'fast',
		dropShadows: false
	});

	/* -----------------------------------------
	 Responsive Videos with fitVids
	 ----------------------------------------- */
	$('#main').fitVids();

	/* -----------------------------------------
	 Lightbox
	 ----------------------------------------- */
	var pp_images = $("a[data-rel^='prettyPhoto']");
	if (pp_images.length) {
		pp_images.magnificPopup({
			type: 'image',
			mainClass: 'mfp-with-zoom',
			gallery: {
				enabled: true
			},
			zoom: {
				enabled: true
			}
		} );
	}


	/* -----------------------------------------
	Parallax
	----------------------------------------- */
	$('.parallax').each(function() {
		var that = $(this);
		that.parallax('50%', that.data('speed'));
	});


	/* -----------------------------------------
	 Galleries (stapel.js)
	 ----------------------------------------- */
	var tpclose = $('.tp-close');

	var stapel = $( '#tp-grid' ).stapel( {
		gutter    : 30,
		pileAngles: 2,
		onAfterOpen: function(pileName) {
			tpclose.fadeIn();
			var pp_images = $("a[data-rel^='prettyPhoto']");
			pp_images.magnificPopup({
				type: 'image',
				mainClass: 'mfp-with-zoom',
				gallery: {
					enabled: true
				},
				zoom: {
					enabled: true
				}
			} );
		},
		onAfterClose: function(pileName) {
			var pp_images = $("a[data-rel^='prettyPhoto']");
			pp_images.off('click');
		}
	} );

	tpclose.on('click', function(e) {
		$(this).hide();
		stapel.closePile();

		e.preventDefault();
	});

});

}
/*
     FILE ARCHIVED ON 17:53:36 Mar 07, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:39:52 Nov 04, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 175.271
  exclusion.robots: 0.109
  exclusion.robots.policy: 0.097
  cdx.remote: 0.08
  esindex: 0.013
  LoadShardBlock: 139.567 (3)
  PetaboxLoader3.datanode: 45.235 (4)
  load_resource: 65.072
  PetaboxLoader3.resolve: 32.831
*/