jQuery(document).ready(function($) {
    // SLIDER USED AT PREMED
    // USADO PARA APRESENTAR A MEDPASS ANTES DE COMEÇAR O FLUXO DO PREMED

    $('.slider').slick({
      infinite: true,
      autoplay: false,
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
    });

    $('.slick-next').click(function(){
        $('.slider').slick('slickNext');
    });

});
