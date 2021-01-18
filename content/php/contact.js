$(function () {

    // init the validator
    // validator files are included in the download package
    // otherwise download from http://1000hz.github.io/bootstrap-validator

    $('#contact-form').validator();

    // when the form is submitted
    $('#contact-form').on('submit', function (e) {

        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "./content/php/contact.php";

            // POST values in the background of the script URL
            var request = $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                //beforeSend: function (xhr) { xhr.overrideMimeType("text/plain; application/json; charset=UTF-8"); },
                success: function (data) {
                    // data = JSON object that contact.php returns

                    // we recieve the type of the message: success x danger and apply it to the
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    // let's compose Bootstrap alert box HTML
                    var alertBox = '<div class="alert alert-' + messageAlert + ' alert-success alert-dismissable fade show" role="alert"><strong>' + messageText + '</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';

                    // If we have messageAlert and messageText
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').show();
                        // inject the alert to .messages div in our form
                        $('#contact-form').find('.messages').html(alertBox);
                        // empty the form
                        $('#contact-form')[0].reset();
                        setTimeout(function () {
                            $('#contact-form').find('.messages').hide();
                        }, 3000);
                    }
                },
                error: function (data) {
                    var messageText = 'PHP: No hay respuesta.';
                    // let's compose Bootstrap alert box HTML
                    var alertBox = '<div class="alert alert-danger alert-success alert-dismissable fade show" role="alert"><strong>' + messageText + '</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';

                    $('#contact-form').find('.messages').show();
                    // inject the alert to .messages div in our form
                    $('#contact-form').find('.messages').html(alertBox);
                    // empty the form
                    $('#contact-form')[0].reset();

                    setTimeout(function () {
                        $('#contact-form').find('.messages').hide();
                    }, 3000);
                }
            });
            return false;
        }
    })
});