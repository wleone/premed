$(document).ready(function() {

    // CHOOSE ETHNICITY AND GENRE

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

    // SELECT INPUT

    $('.md-select.day').on('click', function () {
      $(this).toggleClass('active');
    });

    $('.md-select.day ul li').on('click', function () {
      var v = $(this).text();
      $('.md-select.day ul li').not($(this)).removeClass('active');
      $(this).addClass('active');
      $('.md-select.day label button').addClass('selected');
      $('.md-select.day label button').text('Dia' + ' ' + v);
    });

    $('.md-select.month').on('click', function () {
      $(this).toggleClass('active');
    });

    $('.md-select.month ul li').on('click', function () {
      var v = $(this).text();
      $('.md-select.month ul li').not($(this)).removeClass('active');
      $(this).addClass('active');
      $('.md-select.month label button').addClass('selected');
      $('.md-select.month label button').text(v);
    });

    $('.md-select.year').on('click', function () {
      $(this).toggleClass('active');
    });

    $('.md-select.year ul li').on('click', function () {
      var v = $(this).text();
      $('.md-select.year ul li').not($(this)).removeClass('active');
      $(this).addClass('active');
      $('.md-select.year label button').addClass('selected');
      $('.md-select.year label button').text(v);
    });

    // INPUT RANGE HEIGHT PERSON

    $('.heightPerson').html($('#height')[0].value.split(',')[0] + '<span class="meters">m</span>');

    $('#height').change(function() {
        var valueInput = $(this)[0].value.split(',')[0];
        var calc = (valueInput * 100) - 100 + '%';
        var result = Math.floor(calc);

        $('.heightPerson').html($(this)[0].value.split(',')[0] + '<span class="meters">m</span>');
        $('.character').css('height', calc);
    });

    jQuery('<div class="quantity-nav flex-row-between-center-center"><div class="quantity-button quantity-down"></div><div class="quantity-button quantity-up"></div></div>').insertAfter('.kg');

    $('.weight').keyup(function() {
        setTimeout(function(){
            input = $('input[type="number"]');
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

            input.val(newVal);

            if( newVal > 99 ){
              $('.quantity input[type="number"]').addClass('inputExpand');
              $('.quantity').addClass('inputExpand');
              $('.quantity-nav').addClass('inputExpand');
            }

            if( newVal < 100 ){
              $('.quantity input[type="number"]').removeClass('inputExpand');
              $('.quantity').removeClass('inputExpand');
              $('.quantity-nav').removeClass('inputExpand');
            }

            var calc = newVal / 2;
            var result = 1 + calc/100.0;

            $('.character').attr('style', 'transform: translateX(-50%) scaleX(' + result + ');' );
        }, 3000);
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
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
        if( newVal > 99 ){
            $('.quantity input[type="number"]').addClass('inputExpand');
            $('.quantity').addClass('inputExpand');
            $('.quantity-nav').addClass('inputExpand');
        }

        var calc = newVal / 2;
        var result = 1 + calc/100.0;

        $('.character').attr('style', 'transform: translateX(-50%) scaleX(' + result + ');' );
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
        if( newVal < 100 ){
            $('.quantity input[type="number"]').removeClass('inputExpand');
            $('.quantity').removeClass('inputExpand');
            $('.quantity-nav').removeClass('inputExpand');
        }

        var calc = spinner.find("input").val(newVal) / 100;
        var result = Math.floor(calc);

        $('.character').css('transform', 'translateX(-50%) scaleX(1.' + calc + ');' );
      });

    });
});
