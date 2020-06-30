
var ratio = 0.3
var options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

$(document).ready(function () {
  $('.main-menu').fadeOut();
  $('#fullpage').fullpage({
    anchors: ['page1', 'page2', 'page3', 'page4']



  });
  $('.btn-menu').click(function () {
    $('.main-menu').fadeIn()

    $('.btn-menu').fadeOut();
  });

  $('.Croix').click(function () {
    $('.btn-menu').fadeIn();
    $('.main-menu').fadeOut();
  });
  fullpage_api.setResponsive(false);



  var isvisible = function (entries, observer) {
    entries.forEach(function (entry) {

      /*console.log('je te voie')  */
      if (entry.target.paused) {
        entry.target.play()
      }


    });

  }


  var observer = new IntersectionObserver(isvisible, options);
  document.querySelectorAll('video').forEach(function (info) {
    observer.observe(info)
  })
});