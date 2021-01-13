$(function () {
    $('.slider-items').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
    });

    $(document).ready(function() {
        $('img').magnificPopup({
            type:'image'
        });
      });

      $('.popup-button').magnificPopup({
        type:'inline',
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
      });

});
