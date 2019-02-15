function generateLoginHeader() {
    var headerWrapper = document.createElement('div');
    $(headerWrapper).addClass('login-form-holder');
    var logo = document.createElement('span');
    $(logo).text(LOGIN_FORM.TITLE);
    $(headerWrapper).append(logo);

    return headerWrapper;
}


function generateField(input, id, placeholder) {
    var input = document.createElement('input');
    $(input).addClass('inputClass');
    $(input).attr('id', id);
    $(input).attr('placeholder', placeholder);

    return input;
}

