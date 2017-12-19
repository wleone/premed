jQuery(document).ready(function($) {
    // USED ON USER'S PSHYSICAL ACTIVITYS OPTIONS BUTTON AT PREMED

    $('.illustrations .no').addClass('appear');

    // FIRST QUEST
    $('.quest.first .buttonSelect.first').click(function(event) {
        $(this).addClass('active');
        $('.quest.first .buttonSelect.second').removeClass('active');
        $('.quest.second').fadeIn();
        $('.quest.third').fadeIn();
    });

    $('.quest.first .buttonSelect.second').click(function(event) {
        $('.illustrations .insufficient').removeClass('appear');
        $('.illustrations .ideal').removeClass('appear');
        $('.illustrations .no').addClass('appear');
        $(this).addClass('active');
        $('.quest.first .buttonSelect.first').removeClass('active');
        $('.quest.second').fadeOut();
        $('.quest.third').fadeOut();
    });

    // SECOND QUEST
    $('.quest.second .buttonSelect.first').click(function(event) {
        $('.illustrations .ideal').removeClass('appear');
        $('.illustrations .no').removeClass('appear');
        $('.illustrations .insufficient').addClass('appear');
        $(this).addClass('active');
        $('.quest.second .buttonSelect.second').removeClass('active');
        $('.quest.third').fadeIn();
    });

    $('.quest.second .buttonSelect.second').click(function(event) {
        $('.illustrations .insufficient').removeClass('appear');
        $('.illustrations .no').removeClass('appear');
        $('.illustrations .ideal').addClass('appear');
        $(this).addClass('active');
        $('.quest.second .buttonSelect.first').removeClass('active');
    });

    // THIRD QUEST
    $('.quest.third .buttonSelect.first').click(function(event) {
        $(this).addClass('active');
        $('.quest.third .buttonSelect.second').removeClass('active');
    });

    $('.quest.third .buttonSelect.second').click(function(event) {
        $(this).addClass('active');
        $('.quest.third .buttonSelect.first').removeClass('active');
    });

});
