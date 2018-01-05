jQuery(document).ready(function($) {
    // USED ON USER'S PSHYSICAL ACTIVITYS OPTIONS BUTTON AT PREMED
    // FAZ COM QUE A ILUSTRACAO APAREÇA QUANDO A PAGINA FOR CARREGADA
    $('.illustrations .alcoholic').addClass('appear');

    // FIRST QUEST
    // ESSAS FUNCOES ADICIONAM UMA CLASSE NOS BOTOES NA QUAL O USUARIO CLICAR
    // E TROCA QUAL ILUSTRACAO DEVE APARECER
    $('.quest.first .buttonSelect.first').click(function(event) {
        $('.illustrations .alcoholic').addClass('appear');
        $('.illustrations .non-alcoholic').removeClass('appear');
        $(this).addClass('active');
        $('.quest.first .buttonSelect.second').removeClass('active');
    });

    $('.quest.first .buttonSelect.second').click(function(event) {
        $('.illustrations .alcoholic').removeClass('appear');
        $('.illustrations .non-alcoholic').addClass('appear');
        $(this).addClass('active');
        $('.quest.first .buttonSelect.first').removeClass('active');
    });

});
