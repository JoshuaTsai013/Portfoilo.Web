$(document).ready(function(){
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 360,
        gutter: 40
    });

    $('.grid').imagesLoaded().progress( function() {
        $('.grid').masonry('layout');
      });
});
