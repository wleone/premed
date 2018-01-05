jQuery(document).ready(function($) {
    // CHOOSE ETHNICITY AND GENRE
    // ADICIONA OU REMOVE A CLASSE ATIVA DA ESCOLHA DE GENERO DO USUARIO

    $('.choose-genre .female').click(function(event) {
            $('.choose-genre .female img').toggleClass('active');
            $('.choose-genre .male img').toggleClass('active');
            $('.choose-ethnicity .male').fadeOut();
            setTimeout(function(){
                $('.choose-ethnicity .female').fadeIn();
                $('.choose-ethnicity .female').css('display','flex');
            }, 500);
    });

    $('.choose-genre .male').click(function(event) {
            $('.choose-genre .male img').toggleClass('active');
            $('.choose-genre .female img').toggleClass('active');
            $('.choose-ethnicity .female').fadeOut();
            setTimeout(function(){
                $('.choose-ethnicity .male').fadeIn();
                $('.choose-ethnicity .male').css('display','flex');
            }, 500);
    });

    // ADICIONAM OU REMOVEM A CLASSE ATIVA PARA A RAÇA QUE O USUARIO ESCOLHER

    $('.choose-ethnicity .male .card.masculino.afrodescendente').click(function(event) {
        $('.male .card.masculino.afrodescendente').css('opacity', '1').addClass('active');
        $('.male .card.masculino.caucasiano').css('opacity', '0.5').removeClass('active');
        $('.male .card.masculino.asiatico').css('opacity', '0.5').removeClass('active');
        $('.male .card.masculino.outro').css('opacity', '0.5').removeClass('active');
    });

    $('.choose-ethnicity .male .card.masculino.caucasiano').click(function(event) {
        $('.male .card.masculino.afrodescendente').css('opacity', '0.5').removeClass('active');
        $('.male .card.masculino.caucasiano').css('opacity', '1').addClass('active');
        $('.male .card.masculino.asiatico').css('opacity', '0.5').removeClass('active');
        $('.male .card.masculino.outro').css('opacity', '0.5').removeClass('active');
    });

    $('.choose-ethnicity .male .card.masculino.asiatico').click(function(event) {
        $('.male .card.masculino.afrodescendente').css('opacity', '0.5').removeClass('active');
        $('.male .card.masculino.caucasiano').css('opacity', '0.5').removeClass('active');
        $('.male .card.masculino.asiatico').css('opacity', '1').addClass('active');
        $('.male .card.masculino.outro').css('opacity', '0.5').removeClass('active');
    });

    $('.choose-ethnicity .male .card.masculino.outro').click(function(event) {
        $('.male .card.masculino.afrodescendente').css('opacity', '0.5').removeClass('active');
        $('.male .card.masculino.caucasiano').css('opacity', '0.5').removeClass('active');
        $('.male .card.masculino.asiatico').css('opacity', '0.5').removeClass('active');
        $('.male .card.masculino.outro').css('opacity', '1').addClass('active');
    });

    $('.choose-ethnicity .female .card.feminino.afrodescendente').click(function(event) {
        $('.female .card.feminino.afrodescendente').css('opacity', '1').addClass('active');
        $('.female .card.feminino.caucasiano').css('opacity', '0.5').removeClass('active');
        $('.female .card.feminino.asiatico').css('opacity', '0.5').removeClass('active');
        $('.female .card.feminino.outro').css('opacity', '0.5').removeClass('active');
    });

    $('.choose-ethnicity .female .card.feminino.caucasiano').click(function(event) {
        $('.female .card.feminino.afrodescendente').css('opacity', '0.5').removeClass('active');
        $('.female .card.feminino.caucasiano').css('opacity', '1').addClass('active');
        $('.female .card.feminino.asiatico').css('opacity', '0.5').removeClass('active');
        $('.female .card.feminino.outro').css('opacity', '0.5').removeClass('active');
    });

    $('.choose-ethnicity .female .card.feminino.asiatico').click(function(event) {
        $('.female .card.feminino.afrodescendente').css('opacity', '0.5').removeClass('active');
        $('.female .card.feminino.caucasiano').css('opacity', '0.5').removeClass('active');
        $('.female .card.feminino.asiatico').css('opacity', '1').addClass('active');
        $('.female .card.feminino.outro').css('opacity', '0.5').removeClass('active');
    });

    $('.choose-ethnicity .female .card.feminino.outro').click(function(event) {
        $('.female .card.feminino.afrodescendente').css('opacity', '0.5').removeClass('active');
        $('.female .card.feminino.caucasiano').css('opacity', '0.5').removeClass('active');
        $('.female .card.feminino.asiatico').css('opacity', '0.5').removeClass('active');
        $('.female .card.feminino.outro').css('opacity', '1').addClass('active');
    });
});
