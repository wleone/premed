jQuery(document).ready(function($) {

    // USED ON SMOKE OPTIONS AT PREMED

    $(".cigarrets img.static").addClass('showCigarret');

    // FIRST QUEST
    $(".quest.first .buttonSelect.first").click(function(event) {
        $(this).addClass("active");
        $(".quest.first .buttonSelect.second").removeClass("active");
        $(".quest.first .buttonSelect.third").removeClass("active");

        if ( !$('.cigarrets img.cigarret').hasClass('showCigarret') ) {
            $(".cigarrets img.static").addClass('showCigarret');
        }

        if ( !$('.cigarrets img.static').hasClass('showCigarret') ) {
            $(".cigarrets img.cigarret").addClass('showCigarret');
        }

        if ( $('.cigarrets img.cigarret').hasClass('showCigarret') && $('.cigarrets img.static').hasClass('showCigarret') ) {
            $(".cigarrets img.static").addClass('showCigarret');
            $(".cigarrets img.static").removeClass('hideCigarret');
            $(".cigarrets img.cigarret").removeClass('showCigarret');
            $(".cigarrets img.cigarret").addClass('hideCigarret');
        }

        setTimeout(function(){
            $(".quest.smoker").fadeIn();
        }, 500);
        $(".quest.exSmoker").fadeOut();
    });

    $(".quest.first .buttonSelect.second").click(function(event) {
        $(this).addClass("active");
        $(".quest.first .buttonSelect.first").removeClass("active");
        $(".quest.first .buttonSelect.third").removeClass("active");
        $(".quest.smoker").fadeOut();
        $(".quest.exSmoker").fadeOut();

        input = $('input[type="number"]');
        var oldVal = parseFloat(input.val());
        var newVal = oldVal * 0;
        input.val(newVal);

        if ( $('.cigarrets img.cigarret').hasClass('showCigarret') ) {
            $(".cigarrets img.cigarret").removeClass('showCigarret');
            $(".cigarrets img.cigarret").addClass('hideCigarret');
        }

        if ( $('.cigarrets img.static').hasClass('showCigarret') ) {
            $(".cigarrets img.static").removeClass('showCigarret');
            $(".cigarrets img.static").addClass('hideCigarret');
        }
    });

    $(".quest.first .buttonSelect.third").click(function(event) {
        $(this).addClass("active");
        $(".quest.first .buttonSelect.first").removeClass("active");
        $(".quest.first .buttonSelect.second").removeClass("active");
        $(".quest.smoker").fadeOut();

        if ( !$('.cigarrets img.cigarret').hasClass('showCigarret') ) {
            $(".cigarrets img.static").addClass('showCigarret');
        }

        if ( !$('.cigarrets img.static').hasClass('showCigarret') ) {
            $(".cigarrets img.cigarret").addClass('showCigarret');
        }

        if ( $('.cigarrets img.cigarret').hasClass('showCigarret') && $('.cigarrets img.static').hasClass('showCigarret') ) {
            $(".cigarrets img.static").addClass('showCigarret');
            $(".cigarrets img.static").removeClass('hideCigarret');
            $(".cigarrets img.cigarret").removeClass('showCigarret');
            $(".cigarrets img.cigarret").addClass('hideCigarret');
        }

        setTimeout(function(){
            $(".quest.exSmoker").fadeIn();
        }, 500);

        input = $('input[type="number"]');
        var oldVal = parseFloat(input.val());
        var newVal = oldVal * 0;
        input.val(newVal);
    });

    // CIGARRET ANIMATION

    cigarretAnimation();

    function cigarretAnimation() {
        $(".cigar-perday input[type='number']").change(function() {
            if ( $(this).val() > 0 ) {
                setTimeout( function(){
                    $(".cigarret:nth-child(1)").addClass('showCigarret');
                    $(".cigarret:nth-child(1)").removeClass('hideCigarret');
                }, 150);
                setTimeout( function(){
                    $(".cigarret:nth-child(2)").addClass('showCigarret');
                    $(".cigarret:nth-child(2)").removeClass('hideCigarret');
                }, 250);
                setTimeout( function(){
                    $(".cigarret:nth-child(3)").addClass('showCigarret');
                    $(".cigarret:nth-child(3)").removeClass('hideCigarret');
                }, 350);
                setTimeout( function(){
                    $(".cigarret:nth-child(4)").addClass('showCigarret');
                    $(".cigarret:nth-child(4)").removeClass('hideCigarret');
                }, 450);
                setTimeout( function(){
                    $(".cigarret:nth-child(5)").addClass('showCigarret');
                    $(".cigarret:nth-child(5)").removeClass('hideCigarret');
                }, 550);
                setTimeout( function(){
                    $(".cigarret:nth-child(6)").addClass('showCigarret');
                    $(".cigarret:nth-child(6)").removeClass('hideCigarret');
                }, 650);
                setTimeout( function(){
                    $(".cigarret:nth-child(7)").addClass('showCigarret');
                    $(".cigarret:nth-child(7)").removeClass('hideCigarret');
                }, 750);
            } else {
                setTimeout( function(){
                    $(".cigarret:nth-child(1)").addClass('hideCigarret');
                    $(".cigarret:nth-child(1)").removeClass('showCigarret');
                }, 150);
                setTimeout( function(){
                    $(".cigarret:nth-child(2)").addClass('hideCigarret');
                    $(".cigarret:nth-child(2)").removeClass('showCigarret');
                }, 250);
                setTimeout( function(){
                    $(".cigarret:nth-child(3)").addClass('hideCigarret');
                    $(".cigarret:nth-child(3)").removeClass('showCigarret');
                }, 350);
                setTimeout( function(){
                    $(".cigarret:nth-child(4)").addClass('hideCigarret');
                    $(".cigarret:nth-child(4)").removeClass('showCigarret');
                }, 450);
                setTimeout( function(){
                    $(".cigarret:nth-child(5)").addClass('hideCigarret');
                    $(".cigarret:nth-child(5)").removeClass('showCigarret');
                }, 550);
                setTimeout( function(){
                    $(".cigarret:nth-child(6)").addClass('hideCigarret');
                    $(".cigarret:nth-child(6)").removeClass('showCigarret');
                }, 650);
                setTimeout( function(){
                    $(".cigarret:nth-child(7)").addClass('hideCigarret');
                    $(".cigarret:nth-child(7)").removeClass('showCigarret');
                }, 750);
            }
        });
    }

});
