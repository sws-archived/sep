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

});