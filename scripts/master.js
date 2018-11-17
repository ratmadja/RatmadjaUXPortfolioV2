function onReady() {


  //JQuery for Jump-to-element
  //Will only work if href of <a> matches id of element to jump to

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top -72
        }, 300);
        return false;
      }
    }
  });


  //JQuery for stickyTopNav

  const stickyTopNav = $('.navmenu').offset().top;

  let stickyNav = function() {
    const scrollTop = $(window).scrollTop();
    $('.navmenu').toggleClass(
      'sticky',
      scrollTop > stickyTopNav +800
    );
  };

  $(window).scroll(function() {
      stickyNav();
  });

};


window.onload = function() {
  onReady();
};


// $(window).scroll(function() {
//   if($(this).scrollTop()>650) {
//     $('.navmenu').addClass("sticky");
//   } else {
//     $('.navmenu').removeClass("sticky");
//   }
// });
