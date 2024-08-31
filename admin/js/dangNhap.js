function Admin(email, pass) {
    this.email = email;
    this.pass = pass;
}
var admin = new Array();
admin[0] = new Admin('nguyenthituyet909w@gmail.com', 'admin');
admin[1] = new Admin('thaysangdeptrai@gmail.com', 'admin');

function password_help() {
    var detail = document.getElementById('forget_pass');
    if (detail.style.display == 'none') {
        detail.style.display = 'block';
    } else {
        detail.style.display = 'none';
    }
}

function validateLogin() {
    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    var error = "";
    for (var i = 0; i < admin.length; i++) {
        if (user == admin[i].email && pass == admin[i].pass) {
            window.location = 'admin-dashboard.html';
            return false;
        }
    }
    error = "Email hoặc mật khẩu sai!";
    if (error != "") { alert(error); }
    return false;
}