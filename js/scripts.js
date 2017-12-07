$(document).ready(function() {

        // $('.choose-ethnicity .female').fadeOut();

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

});
