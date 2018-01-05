jQuery(document).ready(function($) {

    // TESTE QUE O PELEGRINI ESTAVA EXPLICANDO, RELACIONADO AO LOGIN

    var url = 'https://pqbl2deo53.execute-api.us-west-2.amazonaws.com/dev/registration';

    var rt = {
        'rt':'123invite'
    };

    $('#sendSignup').click(function(event) {
        var obj = {
            name : 'Will Leone',
            email : 'wleone@medpass.com.br',
            password : 'Medpass123',
            password_confirmation : 'Medpass123',
            cpf : '446.164.338-79',
            agree : true
        };

        $.post(url, JSON.stringify(rt), function(data, textStatus, json) {
            console.log(data);
            localStorage.setItem('auth',data.Authorization);
        });
    });

    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
        data: {param1: 'value1'}
    })
    .done(function() {
        console.log("success");
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });


});
