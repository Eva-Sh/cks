$(function(){
   //для скрытия контролов на галереях, добавляем класс сокрытия bx-controls--hidden
   //$('.bx-controls').addClass('bx-controls--hidden')
   //$('.bx-controls').hide()

   $('.info__item_2').mouseover(function(e){
      $(".info__item_1 img").animate({opacity: "0.5"}, 500)
   });
   $('.info__item_2').mouseout(function(e){
      $(".info__item_1 img").animate({opacity: "1"}, 500)
   });
   $('.info__item_4').mouseover(function(e){
      $(".info__item_3 img").animate({opacity: "0.5"}, 500)
   });
   $('.info__item_4').mouseout(function(e){
      $(".info__item_3 img").animate({opacity: "1"}, 500)
   });
   $('.info__item_6').mouseover(function(e){
      $(".info__item_5 img").animate({opacity: "0.5"}, 500)
   });
   $('.info__item_6').mouseout(function(e){
      $(".info__item_5 img").animate({opacity: "1"}, 500)
   });

  $('.link_item').click(function(e) {
    e.preventDefault();
    const currentGallery = $(this).attr('href');
    const galleries = $('.gallery').toArray();

    //console.log($(this).hasClass('left'))

      if ($(this).hasClass('left')) {
        $('.gallery').removeClass('section--gallery_right').addClass('section--gallery_left')
      } else {
        $('.gallery').removeClass('section--gallery_left').addClass('section--gallery_right')
      }
    galleries.map(gallery => {
     if (('#' + $(gallery).attr('id')) === currentGallery) {
        if ($(gallery).data('opened')) {
           $(gallery).removeClass('show_gallery').addClass('hidden_gallery').data('opened', false)
           //$('.bx-controls').hide()
          // $('.bxslider').bxSlider({ pager: false })
            //$('.bx-controls').css('position','relative')
           //$(gallery).css({'visibility':'hidden', 'height': '0'}).data('opened', false)
        } else {
           $(gallery).removeClass('hidden_gallery').addClass('show_gallery')
           //$('.bx-controls').show()
           //$('.bxslider').bxSlider({ pager: true })
           //$('.bx-controls').css('position','absolute')
           //$('.bx-controls').removeClass('bx-controls--hidden').addClass('bx-controls--show')
           //$(gallery).css({'visibility':'visible', 'height': '310px'})
           $(gallery).data('opened', true)
         }
     } else {
        $(gallery).removeClass('show_gallery').addClass('hidden_gallery')
      //  $('.bx-controls').hide()
        //$('.bxslider').bxSlider({ pager: false })
        //$('.bx-controls').css('position','relative')
        //$(gallery).css({'visibility':'hidden', 'height': '0'})
    }
    });
  });
});
