// Click event
offset = 0;
$('#navigation li a[href^="#"]').click(function (event) {

  // Prevent from default action to intitiate
  event.preventDefault();

  //remove active from all anchor and add it to the clicked anchor
  $('#navigation li a[href^="#"]').removeClass("active")
  $(this).addClass('active');

  // The id of the section we want to go to
  var anchorId = $(this).attr('href');
  // Our scroll target : the top position of the section that has the id referenced by our href
  var target = $(anchorId).offset().top - offset;

  $('html, body').stop().animate({ scrollTop: target }, 500, function () {
    window.location.hash = anchorId;
  });

  return false;
});
//jQuery to collapse the navbar on scroll
$(window).scroll(function () {
  if ($(window).width() > 678) {
    if ($("#navigation").offset().top > 160) {
      $(".navbar-fixed-top").addClass("header-collapse");
      $(".logo").removeClass("width-17");
      $(".logo").addClass("width-10");
    } else {
      $(".navbar-fixed-top").removeClass("header-collapse");
      $(".logo").addClass("width-17");
      $(".logo").removeClass("width-10");
    }
  }

  if ($(window).width() > 991) {
    $(".stay-tuned-title").removeClass("text-align-center");
    $(".stay-tuned-info").removeClass("text-align-center");
    $(".title-ticket-section").addClass("padding-top-30");
  } else {
    $(".stay-tuned-title").addClass("text-align-center");
    $(".stay-tuned-info").addClass("text-align-center");
    $(".title-ticket-section").removeClass("padding-top-30");

  }
  // Get the current vertical position of the scroll bar
  position = $(this).scrollTop();
  $('#navigation li a[href^="#"]').each(function () {
    var anchorId = $(this).attr('href');
    var target = $(anchorId).offset().top - offset;
    // check if the document has crossed the page
    if (position >= target) {
      //remove active from all anchor and add it to the clicked anchor
      $('#navigation li').removeClass("active")
      $(this).parent().addClass('active');
    }
  });
});
