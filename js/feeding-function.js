jQuery(document).ready(function($) {
    // USED ON USER'S PSHYSICAL ACTIVITYS OPTIONS BUTTON AT PREMED
    // FAZ A ILUSTRACAO APARECER QUANDO A PAGINA É CARREGADA
    $('.illustrations .three').addClass('appear');

    // ADICIONAM OU REMOVEM A CLASSE ATIVA DOS BOTOES
    // FAZ AS RESPECTIVAS ILUSTRACOES APARECEREM OU SUMIR DEPENDENDO DA RESPOSTA
    // DO USUARIO, PARA MOSTRAR A QUANTIDADE DE REFEIÇÕES DO USUARIO

    // FIRST QUEST
    $('.quest.first .buttonSelect.first').click(function(event) {
        $('.illustrations .five').removeClass('appear');
        $('.illustrations .more').removeClass('appear');
        $(this).addClass('active');
        $('.quest.first .buttonSelect.second').removeClass('active');
        $('.quest.first .buttonSelect.third').removeClass('active');
    });

    $('.quest.first .buttonSelect.second').click(function(event) {
        $('.illustrations .five').addClass('appear');
        $('.illustrations .more').removeClass('appear');
        $(this).addClass('active');
        $('.quest.first .buttonSelect.first').removeClass('active');
        $('.quest.first .buttonSelect.third').removeClass('active');
    });

    $('.quest.first .buttonSelect.third').click(function(event) {
        $('.illustrations .five').addClass('appear');
        $('.illustrations .more').addClass('appear');
        $(this).addClass('active');
        $('.quest.first .buttonSelect.first').removeClass('active');
        $('.quest.first .buttonSelect.second').removeClass('active');
    });

    // FAZ A FUNÇÃO DO MODAL PARA A ESCOLHA DE QUANTAS VEZES O USUARIO CONSOME
    // OS RESPECTIVOS ALIMENTOS A BAIXO
    // SELECT FOODS

    // // CANDY

    $('.md-select.candy').on('click', function () {
      $(this).toggleClass('active');
    });

    $('.md-select.candy ul li').on('click', function () {
      var v = $(this).text();
      $('.md-select.candy ul li').not($(this)).removeClass('active');
      $(this).addClass('active');
      $('.md-select.candy label button').addClass('selected');
      $('.md-select.candy label button').text(' ' + v);
    });

    // // MEAT

    $('.md-select.meat').on('click', function () {
      $(this).toggleClass('active');
    });

    $('.md-select.meat ul li').on('click', function () {
      var v = $(this).text();
      $('.md-select.meat ul li').not($(this)).removeClass('active');
      $(this).addClass('active');
      $('.md-select.meat label button').addClass('selected');
      $('.md-select.meat label button').text(' ' + v);
    });

    // // FRUIT

    $('.md-select.fruit').on('click', function () {
      $(this).toggleClass('active');
    });

    $('.md-select.fruit ul li').on('click', function () {
      var v = $(this).text();
      $('.md-select.fruit ul li').not($(this)).removeClass('active');
      $(this).addClass('active');
      $('.md-select.fruit label button').addClass('selected');
      $('.md-select.fruit label button').text(' ' + v);
    });

    // // VEGETABLE

    $('.md-select.vegetable').on('click', function () {
      $(this).toggleClass('active');
    });

    $('.md-select.vegetable ul li').on('click', function () {
      var v = $(this).text();
      $('.md-select.vegetable ul li').not($(this)).removeClass('active');
      $(this).addClass('active');
      $('.md-select.vegetable label button').addClass('selected');
      $('.md-select.vegetable label button').text(' ' + v);
    });

    // // MILK DERIVATIVES (CHEESE)

    $('.md-select.cheese').on('click', function () {
      $(this).toggleClass('active');
    });

    $('.md-select.cheese ul li').on('click', function () {
      var v = $(this).text();
      $('.md-select.cheese ul li').not($(this)).removeClass('active');
      $(this).addClass('active');
      $('.md-select.cheese label button').addClass('selected');
      $('.md-select.cheese label button').text(' ' + v);
    });

});
