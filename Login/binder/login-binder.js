var loginWidget;
var root = '#root';
var data = {};


function initializeApp() {
    loginWidget = $.extend(true, {}, new loginWidget());
    $(root).append(loginWidget.getWidget());

    loginControls();
}

function loginControls() {
    $(loginWidget.getLoginButton()).on("click tap", function() {
        data["username"] = loginWidget.getUsername();
        data["password"] = loginWidget.getPassword();
        console.log(JSON.stringify(data));
    });

    $(loginWidget.getForgetButton()).on("click tap", function() {
        console.log('Clicked!');
    });

    $(loginWidget.getSignUpButton()).on("click tap", function() {
        console.log('Clicked!');
    });
}


$(document).ready(function() {
    initializeApp();
});