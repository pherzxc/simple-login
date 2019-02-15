var loginWidget;


function initializeApp() {
    loginWidget = $.extend(true, {}, new loginWidget());
    $("#root").append(loginWidget.getWidget());
}

function loginControls() {
    $(loginWidget.getLoginButton()).on("click tap", function() {

    })
}


$(document).ready(function() {
    initializeApp();
});