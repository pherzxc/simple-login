function generateField(style, id, placeholder) {
    var input = document.createElement('input');
    $(input).addClass(style);
    $(input).attr('id', id);
    $(input).attr('placeholder', placeholder);

    return input;
}

function generateLoginButton(style, label) {
    var button = document.createElement('button');
    $(button).addClass(style);
    $(button).text(label);

    return button;
}







