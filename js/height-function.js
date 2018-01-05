jQuery(document).ready(function($) {
    // ADICIONA O BOTÃO DE + E -
    jQuery('<div class="quantity-nav flex-row-between-center-center top-50p left-20p translate-vertical"><div class="quantity-button quantity-down"></div><div class="quantity-button quantity-up"></div></div>').insertAfter('#height');

    input = $('input[type="number"]');
    var newVal = parseFloat(input.val());
    var calc = newVal / 2;
    var result = 1 + calc/200.0;

    // ADICIONA A ANIMAÇÃO PARA DIMINUIR OU AUMENTAR A ALTURA DO PERSONAGEM

    $('.character').attr('style', 'height' + result + ';' );

    // INPUT RANGE HEIGHT PERSON
    var valueInput = $('#height')[0].value.split(',')[0];
    var calc = (valueInput * 110) - 120 + '%';
    var result = Math.floor(calc);

    // ADICIONA O VALOR CONVERTIDO PARA A ALTURA DO PERSONAGEM

    $('.heightPerson').html($('#height')[0].value.split(',')[0]);

    // OBSERVA AS ALTERAÇÕES NO CAMPO DA ALTURA

    $('#height').change(function() {
        var valueInput = $('#height')[0].value.split(',')[0];
        var calc = (valueInput * 110) - 120 + '%';
        var result = Math.floor(calc);

        $('.heightPerson').val(valueInput);
        $('.character').css('height', calc);
    });

    // AUMENTA OU DIMINUI OS VALORES DA ALTURA QUANDO
    // OS BOTÕES DE + E - SÃO CLICADOS

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
