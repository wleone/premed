jQuery(document).ready(function($) {
    // USED ON USER'S PSHYSICAL ACTIVITYS OPTIONS BUTTON AT PREMED

    $('.illustrations .alcoholic').addClass('appear');

    // FIRST QUEST
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
