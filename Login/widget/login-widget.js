var loginWidget = function() {
    var global = {
        wrapper: null,
        header: null,
        username: null,
        password: null,
        login: null
    };

    initialize();

    function initialize() {
        var user;
        var pass;

        var wrapper = document.createElement('div');
        $(wrapper).addClass('page-wrapper');
        global.wrapper = wrapper;

        var header = generateLoginHeader();
        global.header = header;

        var username = generateField(user, LOGIN_ID.USER, LOGIN_LABEL.USER);
        global.username = username;
        
        var password = generateField(pass, LOGIN_ID.PASS, LOGIN_LABEL.PASS);
        global.password = password;
    
        var loginButton = document.createElement('button');
        global.login = loginButton;
        $(loginButton).addClass('button');
        $(loginButton).text(LOGIN_LABEL.BUTTON);

        $(wrapper).append(header);
        $(wrapper).append(username);
        $(wrapper).append(password);
        $(wrapper).append(loginButton);

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

}



