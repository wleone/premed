jQuery(document).ready(function($) {
    // USED ON USER'S PSHYSICAL ACTIVITYS OPTIONS BUTTON AT PREMED
    // FAZ A ILUSTRAÇÃO APARECER QUANDO A PAGINA FOR CARREGADA
    $('.illustrations .pain').addClass('appear');

    // ADICIONA OU REMOVE A CLASSE ATIVA
    // MOSTRA OU ESCONDE A RESPECTIVA ILUSTRACAO

    // FIRST QUEST
    $('.quest.first .buttonSelect.first').click(function(event) {
        $('.illustrations .pain').addClass('appear');
        $('.illustrations .no-pain').removeClass('appear');
        $(this).addClass('active');
        $('.quest.first .buttonSelect.second').removeClass('active');
    });

    $('.quest.first .buttonSelect.second').click(function(event) {
        $('.illustrations .pain').removeClass('appear');
        $('.illustrations .no-pain').addClass('appear');
        $(this).addClass('active');
        $('.quest.first .buttonSelect.first').removeClass('active');
    });

});
