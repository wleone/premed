jQuery(document).ready(function($) {
    // USED ON USER'S PSHYSICAL ACTIVITYS OPTIONS BUTTON AT PREMED
    // FAZ A ILUSTRACAO APARECER ASSIM QUE A PAGINA FOR CARREGADA
    $('.illustrations .tired').addClass('appear');

    // ESSAS FUNCOES ADICIONAM UMA CLASSE NOS BOTOES NA QUAL O USUARIO CLICAR
    // E TROCA QUAL ILUSTRACAO DEVE APARECER

    // FIRST QUEST
    $('.quest.first .buttonSelect.first').click(function(event) {
        $('.illustrations .tired').addClass('appear');
        $('.illustrations .non-tired').removeClass('appear');
        $(this).addClass('active');
        $('.quest.first .buttonSelect.second').removeClass('active');
    });

    $('.quest.first .buttonSelect.second').click(function(event) {
        $('.illustrations .tired').removeClass('appear');
        $('.illustrations .non-tired').addClass('appear');
        $(this).addClass('active');
        $('.quest.first .buttonSelect.first').removeClass('active');
    });

});
