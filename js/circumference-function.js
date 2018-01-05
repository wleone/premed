jQuery(document).ready(function($) {
    // USED ON USER'S ABDOMINAL CIRCUMFERENCE OPTIONS BUTTON AT PREMED
    // ADICIONA OU REMOVE A CLASSE ATIVA NOS BOTOES
    // ESTICA OU MANTEM O TAMANHO ORIGINAL DA CALÇA
    $('.buttonSelect.second').click(function(event) {
        $('.illustrations img').addClass('stretchPants');
        $(this).addClass('active');
        $('.buttonSelect.first').removeClass('active');
    });

    $('.buttonSelect.first').click(function(event) {
        $('.illustrations img').removeClass('stretchPants');
        $(this).addClass('active');
        $('.buttonSelect.second').removeClass('active');
    });
});
