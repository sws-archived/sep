// Javascript for SEP

$(document).ready(function() {
	// if Javascript is enabled, do these things:
	$('body').removeClass('nojs');
	$('.nav-collapse .dropdown').removeClass('open');
	$('.nav-collapse').removeClass('in');
	$('#article-sidebar .btn-navbar').addClass('collapsed');
	$('#article-sidebar #article-nav').removeClass('in');
	$('#mirrors .btn-group').removeClass('open');
	
	// $('a[name="a"]').css('padding-top', 25 + $('#toc-nav').outerHeight(true));
	// $('a[name="b"]').css('padding-top', $('#toc-nav').outerHeight(true));
    // $('a[name="c"]').css('padding-top', $('#toc-nav').outerHeight(true));
	
	// Dock each summary as it arrives just below the docked header, pushing the previous summary up the page.
	var summaries = $('.sticky');
	summaries.each(function(i) {
		var summary = $(summaries[i]);
		var next = summaries[i + 1];

		summary.scrollToFixed({
			limit: function() {
				var limit = 0;
				if (next) {
					limit = $(next).offset().top - $(this).outerHeight(true) - 10;
				} else {
					limit = $('#article-banner').offset().top - $(this).outerHeight(true) - 10;
				}
				return limit;
			},
			zIndex: 999
		});
	});
});