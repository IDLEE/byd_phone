(function (doc, win) {
    $('.dmenu').click(function(event) {
        $(this).find('.dropdown').slideToggle('fast');
    });
    
    $('.online-btn').on('click', function() {
		$('.m-popover').addClass('open');
		$("body").css("position","fixed")
		$("body").css("width","100%")
	})
	$('.m-close').on('click', function() {
		$('.m-popover').removeClass('open')
		$("body").css("position","relative")
	})
})(document, window);
