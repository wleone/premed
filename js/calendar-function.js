jQuery(document).ready(function($) {
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
});
