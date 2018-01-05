jQuery(document).ready(function($) {

    // USADO EM ALGUMAS TELAS DO PREMED, ONDE PODE SER QUE O USUARIO TENHA UMA DUVIDA

    setTimeout( function(event){
        $('.bemtevi.premed').addClass('expandUp');
    }, 1000);

    $('.bemtevi.premed .helper').click(function(event) {
        if ( $('.bemtevi.premed .modal').hasClass('open') ) {
            $('.bemtevi.premed .modal').removeClass('open');
            $('.bemtevi.premed .helper .alert').fadeIn();
        } else {
            $('.bemtevi.premed .modal').addClass('open');
            $('.bemtevi.premed .helper .alert').fadeOut();
        }
    });

    $('.bemtevi.premed .modal .closeButton').click(function(event) {
        $('.bemtevi.premed .modal').removeClass('open');
        $('.bemtevi.premed .helper .alert').fadeIn();
    });

});
