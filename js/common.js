head.ready(document, function () {

	function tabs() {
		var el = $('.js-tabs'),
				el_tab = el.find('.price__menu a'),
				el_list = el.find('.price__content'),
				el_item = el.find('.price__item');


			el_tab.on('click', function() {
				el.find('.price__menu a').removeClass('is-active');
				$(this).addClass('is-active');
				return false;
			});

			$('.price__menu a').each(function() {
				var el_id = $(this).attr("href");
				$(this).on('click', function() {
					$('.price__content').find('.price__item').removeClass('is-open');
					$(el_id).addClass('is-open');
				});
			});

	} tabs();

	$('.js-popuptrigger').on('click', function() {
		$(this).parent().find('.popup').toggle();
		return false;
	});

});