$(document).ready(function(){
    // $('.grid').masonry({
    //     itemSelector: '.grid-item',
    //     columnWidth: '.grid-sizer',
    //     percentPosition: true

    // });

    $('.row').imagesLoaded().progress( function() {
        $('.row').masonry('layout');
      });
});
