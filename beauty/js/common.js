$(function() {

	$('#my-menu').mmenu({
		extensions: ['theme-black', 'effect-menu-slider', 'pagedim-black', "position-right"],
		navbar: {
			title: '<img src="img/logo.svg" alt="logo">'
		}
		
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	}).bind('close:finish', function(){
		$('.hamburger').removeClass('is-active');
	});

	$('.carousel-services').on('initialized.owl.carousel', function(){
		setTimeout(function() {
			carouselService();
		}, 100);
	});

	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			}
		}
	});

	$('.carousel-services-content').equalHeights();

	function carouselService(){
		$('.carousel-services-item').each(function() {
			var ths  = $(this),
				thsh = ths.find('.carousel-services-content').outerHeight();
				ths.find('.carousel-services-image').css('min-height', thsh);
		});
	}carouselService();

	$('.carousel-services-composition .h3').each(function(){
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});

	$('section .h2').each(function(){
		var ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
	});

	$('select').selectize();

	$('.reviews').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		autoHeight: true,
	});

	$('.partners').owlCarousel({
		loop: true,
		items: 4,
		smartSpeed: 700,
		nav: true,
		dots: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			},
		}
	});

	//E-mail Ajax Send
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fideOut()// Done Functions
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

	$(".top").click(function() {
 		$("html, body").animate({scrollTop: 0 }, 3000, "linear");
 		return false;
	});

	//Resize window
	function onResize() {
		$('.carousel-services-content').equalHeights();
	};

});

$(window).on('load', function(){
	$('.preloader').delay(1000).fadeOut('slow');
})
