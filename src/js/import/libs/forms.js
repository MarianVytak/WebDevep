import $ from "jquery";
import "../../../../node_modules/inputmask/dist/inputmask.js";
import "../../../../node_modules/inputmask/dist/jquery.inputmask.js";
import "../../../../node_modules/jquery-validation/dist/jquery.validate.js";

"use strict";

$(document).ready(function () {

    $(".input-tel").inputmask("+7(999)999-99-99");

    $.validator.addMethod( "mobileRU", function( phone_number, element ) {
        var ruPhone_number = phone_number.replace( /\(|\)|\s+|-/g, "" );
        return this.optional( element ) || ruPhone_number.length > 9 && /^((\+7|7|8)+([0-9]){10})$/.test( ruPhone_number );
    }, "Please specify a valid mobile number" );

    $("#contactsForm").validate({

        submitHandler: function() {
            $.ajax({
                type: "POST",
                url: "/",
                data: $("#contactsForm").serialize()
            }).done(function () {
                alert("Форма отправлена!");
                setTimeout(function () {
                    $("#contactsForm").trigger("reset");
                }, 1000);
            });
            return false;
        },

        rules: {
            input_name_contacts: {
                required: true,
                minlength: 2
            },
            input_tel_contacts: {
                required: true,
                mobileRU: true
            },
            input_email_contacts: {
                email: true
            },
            "contacts_check_accept[]": {
                required: true,
                minlength: 1
            },
        },
        messages: {
            input_name_contacts: {
                required: "Это поле обязательно к заполнению",
                minlength: jQuery.validator.format("Длина имени должна составлять не менее {0} букв.")
            },
            input_tel_contacts: {
                required: "Это поле обязательно к заполнению",
                mobileRU: "Пожалуйста, укажите действительный номер мобильного телефона"
            },
            input_email_contacts: {
                email: "Введите пожалуйста корректный e-mail"
            },
            "contacts_check_accept[]": "Согласитесь с Политикой конфеденциальности"
        },
        focusCleanup: true,
        focusInvalid: false,
        errorClass: "form__input_error",
        validClass: "form__input_success"
    });

    $("#callForm").validate({

        submitHandler: function () {
            $.ajax({
                type: "POST",
                url: "/",
                data: $("#callForm").serialize()
            }).done(function () {
                alert("Форма отправлена!");
                setTimeout(function () {
                    $("#callForm").trigger("reset");
                }, 1000);
            });
            return false;
        },

        rules: {
            input_name_call: {
                required: true,
                minlength: 2
            },
            input_tel_call: {
                required: true,
                mobileRU: true
            },
            "call_check_accept[]": {
                required: true,
                minlength: 1
            },
        },
        messages: {
            input_name_call: {
                required: "Это поле обязательно к заполнению",
                minlength: jQuery.validator.format("Длина имени должна составлять не менее {0} букв.")
            },
            input_tel_call: {
                required: "Это поле обязательно к заполнению",
                mobileRU: "Пожалуйста, укажите действительный номер мобильного телефона"
            },
            "call_check_accept[]": "Согласитесь с Политикой конфеденциальности"
        },
        focusCleanup: true,
        focusInvalid: false,
        errorClass: "form__input_error",
        validClass: "form__input_success"
    });

    $("#faqForm").validate({

        submitHandler: function () {
            $.ajax({
                type: "POST",
                url: "/",
                data: $("#faqForm").serialize()
            }).done(function () {
                alert("Форма отправлена!");
                setTimeout(function () {
                    $("#faqForm").trigger("reset");
                }, 1000);
            });
            return false;
        },

        rules: {
            input_name_faq: {
                required: true,
                minlength: 2
            },
            input_email_faq: {
                email: true
            },
            "faq_check_accept[]": {
                required: true,
                minlength: 1
            },
        },
        messages: {
            input_name_faq: {
                required: "Это поле обязательно к заполнению",
                minlength: jQuery.validator.format("Длина имени должна составлять не менее {0} букв.")
            },
            input_email_faq: {
                email: "Введите пожалуйста корректный e-mail"
            },
            "faq_check_accept[]": "Согласитесь с Политикой конфеденциальности"
        },
        focusCleanup: true,
        focusInvalid: false,
        errorClass: "form__input_error",
        validClass: "form__input_success"
    });

    $("#introForm").validate({

        submitHandler: function () {
            $.ajax({
                type: "POST",
                url: "/",
                data: $("#introForm").serialize()
            }).done(function () {
                alert("Форма отправлена!");
                setTimeout(function () {
                    $("#introForm").trigger("reset");
                }, 1000);
            });
            return false;
        },

        rules: {
            input_name_intro: {
                required: true,
                minlength: 2
            },
            input_tel_intro: {
                required: true,
                mobileRU: true
            },
            "intro_check_accept[]": {
                required: true,
                minlength: 1
            },
        },
        messages: {
            input_name_intro: {
                required: "Это поле обязательно к заполнению",
                minlength: jQuery.validator.format("Длина имени должна составлять не менее {0} букв.")
            },
            input_tel_intro: {
                required: "Это поле обязательно к заполнению",
                mobileRU: "Пожалуйста, укажите действительный номер мобильного телефона"
            },
            "intro_check_accept[]": "Согласитесь с Политикой конфеденциальности"
        },
        focusCleanup: true,
        focusInvalid: false,
        errorClass: "form__input_error",
        validClass: "form__input_success"
    });

    $("#tariffForm").validate({

        submitHandler: function () {
            $.ajax({
                type: "POST",
                url: "/",
                data: $("#tariffForm").serialize()
            }).done(function () {
                alert("Форма отправлена!");
                setTimeout(function () {
                    $("#tariffForm").trigger("reset");
                }, 1000);
            });
            return false;
        },

        rules: {
            input_name_tariff: {
                required: true,
                minlength: 2
            },
            input_tel_tariff: {
                required: true,
                mobileRU: true
            },
            input_email_tariff: {
                email: true
            },
            "tariff_check_accept[]": {
                required: true,
                minlength: 1
            },
        },
        messages: {
            input_name_tariff: {
                required: "Это поле обязательно к заполнению",
                minlength: jQuery.validator.format("Длина имени должна составлять не менее {0} букв.")
            },
            input_tel_tariff: {
                required: "Это поле обязательно к заполнению",
                mobileRU: "Пожалуйста, укажите действительный номер мобильного телефона"
            },
            input_email_tariff: {
                email: "Введите пожалуйста корректный e-mail"
            },
            "tariff_check_accept[]": "Согласитесь с Политикой конфеденциальности"
        },
        focusCleanup: true,
        focusInvalid: false,
        errorClass: "form__input_error",
        validClass: "form__input_success"
    });

    $(".orderingForm").validate({

        submitHandler: function () {
            $.ajax({
                type: "POST",
                url: "/",
                data: $(".orderingForm").serialize()
            }).done(function () {
                alert("Форма отправлена!");
                setTimeout(function () {
                    $(".orderingForm").trigger("reset");
                }, 1000);
            });
            return false;
        },

        rules: {
            input_name_call: {
                required: true,
                minlength: 2
            },
            input_tel_call: {
                required: true,
                mobileRU: true
            },
            "call_check_accept[]": {
                required: true,
                minlength: 1
            },
        },
        messages: {
            input_name_call: {
                required: "Это поле обязательно к заполнению",
                minlength: jQuery.validator.format("Длина имени должна составлять не менее {0} букв.")
            },
            input_tel_call: {
                required: "Это поле обязательно к заполнению",
                mobileRU: "Пожалуйста, укажите действительный номер мобильного телефона"
            },
            "call_check_accept[]": "Согласитесь с Политикой конфеденциальности"
        },
        focusCleanup: true,
        focusInvalid: false,
        errorClass: "form__input_error",
        validClass: "form__input_success"
    });

});
