jQuery(document).ready(function($) {
    // USED ON USER'S PSHYSICAL ACTIVITYS OPTIONS BUTTON AT PREMED

    $('.illustrations .tired').addClass('appear');

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
