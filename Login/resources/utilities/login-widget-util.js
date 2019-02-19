function generateLoginHeader() {
    var headerWrapper = document.createElement('div');
    $(headerWrapper).addClass('login-form-holder');
    
    var titleWrapper = document.createElement('div');
    $(titleWrapper).addClass('title-holder');
    
    var header1 = document.createElement('span');
    $(header1).attr('id', 'title-header-1')
    $(header1).html(LOGIN_FORM_TEXT.TITLE_1);

    var header2 = document.createElement('span');
    $(header2).attr('id', 'title-header-2')
    $(header2).html(LOGIN_FORM_TEXT.TITLE_2);

    $(titleWrapper).append(header1);
    $(titleWrapper).append(header2);
    $(headerWrapper).append(titleWrapper);

    return headerWrapper;
}


function generateField(input, id, placeholder) {
    var input = document.createElement('input');
    $(input).addClass('input-field');
    $(input).attr('id', id);
    $(input).attr('placeholder', placeholder);

    return input;
}

function generateLoginButton() {
    var loginButton = document.createElement('button');
    $(loginButton).addClass('button');
    $(loginButton).text(LOGIN_FORM_TEXT.BUTTON);

    return loginButton;
}


function generateAuthMessage() {
    var message = document.createElement('span');
    $(message).addClass('auth-message')
}

function generateForgotPassword() {
    var forgotWrapper = document.createElement('div');
    $(forgotWrapper).addClass('login-form-forgot-pass');
    
    var text = document.createElement('span');
    $(text).text(LOGIN_FORM_TEXT.FORGOT_PASS);

    $(forgotWrapper).append(text);
    
    return forgotWrapper;
}

function generateRegister() {
    var registerWrapper = document.createElement('div');
    $(registerWrapper).addClass('login-form-register');
    
    var text = document.createElement('div');
    $(text).attr('id', 'register-text');
    $(text).html(LOGIN_FORM_TEXT.REGISTER_TEXT_1);
    
    var label = document.createElement('span');
    $(label).attr('id', 'sign-up-label');
    $(label).text(LOGIN_FORM_TEXT.REGISTER_TEXT_2);

    $(registerWrapper).append(text);
    $(registerWrapper).append(label);

    return registerWrapper;
}

function generateWallpaperTitle() {
    var titleWrapper = document.createElement('div');
    $(titleWrapper).addClass('wallpaper-title');
    
    var titleText1 = document.createElement('span');
    $(titleText1).attr('id', 'wallpaper-title-text-1');
    $(titleText1).text(WALLPAPER_TEXT.TITLE_1);
    
    var titleText2 = document.createElement('span');
    $(titleText2).attr('id', 'wallpaper-title-text-2');
    $(titleText2).text(WALLPAPER_TEXT.TITLE_2);

    $(titleWrapper).append(titleText1);
    $(titleWrapper).append(titleText2);

    return titleWrapper;
}




