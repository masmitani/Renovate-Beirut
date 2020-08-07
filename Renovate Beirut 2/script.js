$(window).scroll(function() {
    let position = $(this).scrollTop();
    if(position >= 50) {
      $('.logo1').removeClass('bg-secondary');
    } else {
      $('.logo1').addClass('bg-secondary');
    }
  });