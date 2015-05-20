$("#fittext-1").fitText(1.8);

var didScroll;
var lastScroll;
// What's the offset of the navbar from the top
var navBar = $('.navbar');
var navbarPos = navBar.offset().top;
// on scroll, let the interval function know the user has scrolled
$(window).scroll(function(event){
		didScroll = true;
});

// run hasScrolled() and reset didScroll status
setInterval(function() {
		if (didScroll) {
				hasScrolled();
				didScroll = false;
		}
}, 100);

function hasScrolled() {
	if ($(document).scrollTop() > navbarPos)
		navBar.removeClass('navbar-relative').addClass('navbar-fixed');
	else
		navBar.removeClass('navbar-fixed').addClass('navbar-relative');
}

// create scroll offset for scroll spy

var offset = 95;

$('.navbar li a').on('click', function(event) {
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -offset);
});

/*------------------------------------*\
								FORM VALIDATION AND AJAX SUBMIT
\*------------------------------------*/

// post-submit callback
function showResponse() {
				$('.modal__title').text('Message sent!');
}

// ajax options
var ajaxoptions = {
				target: '.modal-body',     // target element(s) to be updated with server response
				beforeSubmit: function(){
								$('.modal-body')
												.empty()
												.append('<span class="glyphicon glyphicon-refresh infinite-spinning push--top" style="font-size:2rem;">');
								$('.modal__title')
												.html('Sending your message&hellip;');
				},
				success: showResponse,   // post-submit callback
				error: function(){
								$('.infinite-spinning').remove();
								$('.modal__title').text('We\'re sorry. Something went wrong.');
								$('.modal-body').append('<p style="font-size: 1.2em;">Please email us at <a href="mailto:info@earlychildhoodfoundation.org">info@earlychildhoodfoundation.org</a></p>');
				}
};


// validate contact form on keyup and submit
$('#contact').validate({

				// submit with ajax
				submitHandler: function(form) {
								$(form).ajaxSubmit(ajaxoptions);
								return false; // need to return false to prevent standard browser submit and page navigation
				},

				// validation rules
				rules: {
								name: 'required',
								email: {
												required: true,
												email: true
								}
				},

				//validation errorœ messages
				messages: {
								name: 'Your name is required',
								email: {
												email: 'Please enter a valid email address',
												required: 'We\'ll need your email to contact you'
								}
				}
});
