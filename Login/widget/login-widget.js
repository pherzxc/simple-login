var loginWidget = function() {
    var global = {
        wrapper: null,
        header: null,
        username: null,
        password: null,
        forgot: null,
        register: null,
        login: null
    };

    global.wrapper = initialize();

    function initialize() {
        var user;
        var pass;

        var wrapper = document.createElement('div');
        $(wrapper).addClass('page-wrapper');

        var wallpaperWrapper = document.createElement('div');
        $(wallpaperWrapper).addClass('wallpaper-wrapper');

        var wallpaperTitle = generateWallpaperTitle();

        var formWrapper = document.createElement('div');
        $(formWrapper).addClass('form-wrapper');

        var header = generateLoginHeader();
        global.header = header;

        var username = generateField(LOGIN_CLASS_LABEL.INPUT, LOGIN_ID.USER, LOGIN_FORM_TEXT.USER);
        global.username = username;
        
        var password = generateField(LOGIN_CLASS_LABEL.INPUT, LOGIN_ID.PASS, LOGIN_FORM_TEXT.PASS);
        $(password).attr('type', 'password');
        global.password = password;
    
        var loginButton = generateLoginButton(LOGIN_CLASS_LABEL.BUTTON, LOGIN_FORM_TEXT.BUTTON)
        global.login = loginButton;  

        var forgot = generateForgotPassword();
        global.forgot = forgot;

        var register = generateRegister();
        global.register = register;

        var signup = $('#sign-up-label');
        global.signup = signup;

        $(formWrapper).append(header);
        $(formWrapper).append(username);
        $(formWrapper).append(password);
        $(formWrapper).append(loginButton);
        $(formWrapper).append(forgot);
        $(formWrapper).append(register);
        $(wallpaperWrapper).append(wallpaperTitle);
        $(wrapper).append(wallpaperWrapper);
        $(wrapper).append(formWrapper)

        return wrapper;
    }

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

    function generateAuthMessage() {
        var message = document.createElement('span');
        $(message).addClass('auth-message')
    }
    
    function generateForgotPassword() {
        var forgotWrapper = document.createElement('div');
        $(forgotWrapper).addClass('login-form-forgot-pass');
        
        var button = document.createElement('button');
        $(button).text(LOGIN_FORM_TEXT.FORGOT_PASS);
    
        $(forgotWrapper).append(button);
        
        return forgotWrapper;
    }
    
    function generateRegister() {
        var registerWrapper = document.createElement('div');
        $(registerWrapper).addClass('login-form-register');
        
        var text = document.createElement('div');
        $(text).attr('id', 'register-text');
        $(text).html(LOGIN_FORM_TEXT.REGISTER_TEXT_1);
        
        var button = document.createElement("button");
        $(button).attr('id', 'sign-up-label');
        $(button).text(LOGIN_FORM_TEXT.REGISTER_TEXT_2);
    
        $(registerWrapper).append(text);
        $(registerWrapper).append(button);
    
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

    loginWidget.prototype.getWidget = function() {
        return global.wrapper;
    }
    
    loginWidget.prototype.getUsername = function() {
        return $(global.username).val();
    }

    loginWidget.prototype.getPassword = function() {
        return $(global.password).val();
    }  

    loginWidget.prototype.getLoginButton = function() {
        return global.login;
    }

    loginWidget.prototype.getForgetButton = function() {
        return global.forgot;
    }

    loginWidget.prototype.getSignUpButton = function() {
        return global.signup;
    }

}



