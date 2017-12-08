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
        var calc = (valueInput * 120) - 100 + '%';
        var result = Math.floor(calc);

        $('.heightPerson').html($(this)[0].value.split(',')[0] + '<span class="meters">m</span>');
        $('.character').css('height', calc);
    });
});
