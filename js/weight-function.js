$(document).ready(function() {
    jQuery('<div class="quantity-nav flex-row-between-center-center top-Zp"><div class="quantity-button quantity-down"></div><div class="quantity-button quantity-up"></div></div>').insertAfter('.kg');

    input = $('input[type="tel"]');
    var newVal = parseFloat(input.val());
    var calc = newVal / 2;
    var result = 1 + calc/200.0;

    $('.character').attr('style', 'transform: translateX(-50%) scaleX(' + result + '); max-height: 90%;' );

    $('.weight').keyup(function() {
        setTimeout(function(){
            input = $('input[type="tel"]');
            var newVal = parseFloat(input.val());

            if( newVal > 200 ){
                newVal = 200;
                $('.errorMax').fadeIn();
                $('.errorMin').fadeOut();
            }

            if( newVal < 20 ){
                newVal = 20;
                $('.errorMin').fadeIn();
                $('.errorMax').fadeOut();
            }

            if ( newVal < 200 && newVal > 20 ) {
                $('.errorMin').fadeOut();
                $('.errorMax').fadeOut();
                console.log('menor que 200');
            }

            input.val(newVal);

            var calc = newVal / 2;
            var result = 1 + calc/200.0;

            $('.character').attr('style', 'transform: translateX(-50%) scaleX(' + result + '); max-height: 90%;' );
        }, 1500);
    });

    jQuery('.quantity').each(function() {
        var spinner = jQuery(this),
            input = spinner.find('input[type="tel"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
              var newVal = oldValue;
            } else {
              var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");

            var calc = newVal / 2;
            var result = 1 + calc/200.0;

            $('.errorMin').fadeOut();
            $('.errorMax').fadeOut();

            $('.character').attr('style', 'transform: translateX(-50%) scaleX(' + result + '); max-height: 90%;' );
        });

        btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
              var newVal = oldValue;
            } else {
              var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");

            var calc = newVal / 2;
            var result = 1 + calc/200.0;

            $('.errorMin').fadeOut();
            $('.errorMax').fadeOut();

            $('.character').attr('style', 'transform: translateX(-50%) scaleX(' + result + '); max-height: 90%;' );
        });
    });

});
