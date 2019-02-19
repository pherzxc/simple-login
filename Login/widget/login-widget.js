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

        var username = generateField(user, LOGIN_ID.USER, LOGIN_FORM_TEXT.USER);
        global.username = username;
        
        var password = generateField(pass, LOGIN_ID.PASS, LOGIN_FORM_TEXT.PASS);
        $(password).attr('type', 'password');
        global.password = password;
    
        var loginButton = generateLoginButton()
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
        return global.register;
    }

}



