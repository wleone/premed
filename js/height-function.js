jQuery(document).ready(function($) {

    jQuery('<div class="quantity-nav flex-row-between-center-center top-50p left-20p translate-vertical"><div class="quantity-button quantity-down"></div><div class="quantity-button quantity-up"></div></div>').insertAfter('#height');

    input = $('input[type="number"]');
    var newVal = parseFloat(input.val());
    var calc = newVal / 2;
    var result = 1 + calc/200.0;

    $('.character').attr('style', 'height' + result + ';' );

    // INPUT RANGE HEIGHT PERSON
    var valueInput = $('#height')[0].value.split(',')[0];
    var calc = (valueInput * 110) - 120 + '%';
    var result = Math.floor(calc);

    $('.heightPerson').html($('#height')[0].value.split(',')[0]);

    $('#height').change(function() {
        var valueInput = $('#height')[0].value.split(',')[0];
        var calc = (valueInput * 110) - 120 + '%';
        var result = Math.floor(calc);

        $('.heightPerson').val(valueInput);
        $('.character').css('height', calc);
    });

    jQuery('.quantity').each(function() {
        var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
              var newVal = oldValue;
            } else {
              var newVal = oldValue + 0.01;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");

            var calc = newVal / 2;
            var result = 1 + calc/200.0;

            var character = newVal * 35.0 + '%';

            $('.character').css('height', height);
        });

        btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
              var newVal = oldValue;
            } else {
              var newVal = oldValue - 0.01;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");

            var calc = newVal / 2;
            var result = 1 + calc/200.0;

            var character = newVal * 35.0 + '%';

            $('.character').css('height', height);
        });
    });
});
