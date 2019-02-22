var Login = function() {
    var global = {
        username: null,
        password: null,
        signin: null,
        forgot: null,
        signup: null,
        wrapper: null,
        fieldArray: [],
        fieldObject: {}
    }; 

    initialize();

    function initialize() {
        var left = buildLeft();
        var right = buildRight();

        var wrapper = global.wrapper = document.createElement("div");
        $(wrapper).append(left);
        $(wrapper).append(right);
    }

    function buildFields() {
        var wrapper = document.createElement("div");

        for (var i = 0; i < fields.length; i++) {
            var fieldAttributes = fields[i];
            var label = fieldAttributes.label;
            var key = fieldAttributes.key;
            var type = fieldAttributes.type;
            var style = fieldAttributes.style;
            var field = buildField(label, key, type, style);
            $(wrapper).append(field);
            global.fieldArray.push(field);
            global.fieldObject[key] = field;
        }
    }

    function buildField(label, key, type, style) {
        var label = document.createElement("label");
        $(label).text(label);

        var input = document.createElement("input");
        $(input).attr("type", type);
        $(input).attr("id", key);

        var wrapper = document.createElement("div");
        $(wrapper).append(label);
        $(wrapper).append(input);
        $(wrapper).append(style);

        return wrapper;
    }

    function getValues() {
        var data = {};
        for (var i = 0; i < global.fieldArray.length; i++) {
            var field = global.fieldArray[i];v
            var key = $(field).attr("id");
            var value = $(field).val();
            data[key] = value;
        }

        for (var key in global.fieldObject) {
            var field = global.fieldObject[key];
            var value = $(field).val();
            data[key] = value;
        }
        return;
    }

    function buildLeft() {
        var header = document.createElement("label");
        $(header).text(LOGIN.header);
        
        var description = document.createElement("label");
        $(description).text(LOGIN.description);

        var image = document.createElement("div");
        $(image).addClass(LOGIN.icon);
        $(image).append(header);
        $(image).append(description);

        return image;
    }

    function buildRight() {
        var header = buildHeader();
        var fields = buildFields();
        var controls = buildControls();

        var wrapper = document.createElement("div");
        $(wrapper).append(header);
        $(wrapper).append(fields);
        $(wrapper).append(controls);

        return wrapper;
    }

    function buildHeader() {
        var label = document.createElement("label");
        $(label).text("");

        var wrapper = document.createElement("div");
        $(wrapper).append(label);
        
        return wrapper;
    }

    function buildFields() {
        var username = global.username = buildInput("username", "text", "");
        var password = global.password = buildInput("password", "password", "");

        var wrapper = document.createElement("div");
        $(wrapper).append(username);
        $(wrapper).append(password);

        return wrapper;
    }

    function buildInput(placeholder, id, type, style) {
        var input = document.createElement("input");
        $(input).attr("placeholder", placeholder);
        $(input).attr("type", type);
        $(input).attr("id", id);
        $(input).addClass(style);

        return input;
    }

    function buildControls() {
        var signin = global.signin = buildButton("signin", "Sign in", "");

        var forgot = global.forgot = buildButton("forgot", "Forgot your password?", "");

        var signup = buildSignup();

        var wrapper = document.createElement("div");
        $(wrapper).append(signin);
        $(wrapper).append(forgot);
        $(wrapper).append(signup);
        
        return wrapper;
    }

    function buildSignup() {
        var span = document.createElement("span");
        $(span).text("Dont have an account?");

        var signup = global.signup = buildButton("signup", "Sign up", "");

        var wrapper = document.createElement("div");
        $(wrapper).append(span);
        $(wrapper).append(signup);

        return wrapper;
    }
    
    function buildButton(id, label, style) {
        var button = document.createElement("button");
        $(button).text(label);
        $(button).attr("id", id);
        $(button).addClass(style);

        return button;
    }

    Login.prototype.getUsername = function() {
        return global.username;
    }

    Login.prototype.getWidget = function() {
        return global.wrapper;
    }
}