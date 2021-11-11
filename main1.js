  /*ハンバーガーjs*/
  $(function() {
    const hum = $('#hamburger, .close')
    const nav = $('.sp-nav')
    hum.on('click', function(){
      nav.toggleClass('toggle');
    });
  });
  
  /*TOP移動ボタン*/
  jQuery(function() {
  var appear = false;
  var pagetop = $('#page_top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 130) {
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'bottom': '50px'
        }, 300);
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'bottom': '-50px'
        }, 300);
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
});
