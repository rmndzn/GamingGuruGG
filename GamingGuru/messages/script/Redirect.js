document.addEventListener('DOMContentLoaded', function() {
    var submitButton = document.getElementById('submit-btn');
    submitButton.addEventListener('click', function() {
        window.location.href = './valo-chat.html';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('invite-btn');
    btn.addEventListener('click', function() {
        window.location.href = './referral.html';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('edit-btn');
    btn.addEventListener('click', function() {
        window.location.href = './editprofile.html';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('logout-btn');
    btn.addEventListener('click', function() {
        window.location.href = '../login.html';
    });
});
