'use strict';

// Make h1 span viewport width
$('#fittext-1').fitText(1.8);


// Fixed positioning for navbar
var didScroll;
// What's the offset of the navbar from the top
var navBar = $('.navbar');
var navbarPos = navBar.offset().top;
// on scroll, let the interval function know the user has scrolled
$(window).scroll(function(){
		didScroll = true;
});

function hasScrolled() {
	if ($(document).scrollTop() > navbarPos) {
		navBar.removeClass('navbar-relative').addClass('navbar-fixed');
	} else {
		navBar.removeClass('navbar-fixed').addClass('navbar-relative');
	}
}


// run hasScrolled() and reset didScroll status
setInterval(function() {
		if (didScroll) {
				hasScrolled();
				didScroll = false;
		}
}, 100);

// create scroll offset for scroll spy

// var offset = 95;

// handle offset by applying offset as padding-top: offset and removing it with margin-top: -offset

// scroll to nav id on click
$('.navbar li a').on('click', function(event) {
		event.preventDefault();
		// loading scrollIntoView polyfill for smooth scrolling
		$($(this).attr('href'))[0].scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		  inline: 'nearest'
		});

		// no longer works with polyfill for smooth scrolling
		//window.scrollBy(0, -offset)

});

// On mobile close the navbar after clicking so that it doesn't cover the content
$('.navbar-collapse ul li a:not(.dropdown-toggle)').bind('click touchstart', function () {
				$('.navbar-toggle:visible').click();
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
												.append('<span class="glyphicon glyphicon-refresh infinite-spinning push-top" style="font-size:2rem;">');
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

//Font loading

$.getScript('https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js').done(
		function(){
			WebFont.load({
				google: {
				families: ['Oswald:300']
			}
		});
	}
);

// Determine LOI deadline script

var year = (new Date()).getFullYear(),

	// Months are zero based so subtract 1, array so can take multiple datas
	deadlines = [
		new Date(year,0,31), // Jan 31
		new Date(year,4,31), // May 31
		new Date(year,8,30) // Sep 30
	],
	months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
	formattedDeadline,
	currentDate = new Date(),
	deadlineIndex,
	nextDate;

	currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(),currentDate.getUTCDate(),0,0,0,0); // get rid of time data

	deadlines.forEach(function(deadline,index){
			 if (currentDate > deadline) {
				// currentDate is passed date?
				deadlineIndex = index;
			 }
	});

	// deadlineIndex hasn't been set, meaning the currentDate is before the first deadline
	if (!deadlineIndex && deadlineIndex !== 0) {
		 nextDate = deadlines[0];
	}

	 // reached last index, next deadline is the first of the next year
	else if (deadlineIndex === deadlines.length-1) {
		 nextDate = deadlines[0];
		 nextDate.setYear(year+1);
	}

	// regular scenario, deadline is next after captured index
	else {
		nextDate = deadlines[deadlineIndex+1];
	}

	formattedDeadline = months[nextDate.getMonth()] + ' ' + nextDate.getUTCDate() + ', ' + nextDate.getFullYear();

	$('#dates').text(formattedDeadline);