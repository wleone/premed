jQuery(document).ready(function($) {
    // USED ON USER'S ABDOMINAL CIRCUMFERENCE OPTIONS BUTTON AT PREMED

    $('.buttonSelect.second').click(function(event) {
        $('.illustrations img.false').show();
        $('.illustrations img.true').hide();
        $(this).addClass('active');
        $('.buttonSelect.first').removeClass('active');
    });

    $('.buttonSelect.first').click(function(event) {
        $('.illustrations img.true').show();
        $('.illustrations img.false').hide();
        $(this).addClass('active');
        $('.buttonSelect.second').removeClass('active');
    });
});
