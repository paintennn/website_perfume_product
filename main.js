function checkSignUp() {
    var a = 1,
        i = 1;
    user1 = document.getElementById('user1').value;
    pass1 = document.getElementById('pass1').value;
    while (a == 1) {
        if (localStorage.getItem('tenTK' + i) == user1) {
            alert("Tài khoản này đã được sử dụng! Vui lòng đăng ký tài khoản khác!");
            a = 0;
        }
        if (localStorage.getItem('tenTK' + i) == null) {
            localStorage.setItem('tenTK' + i, user1);
            localStorage.setItem('tenTK' + 'MK' + i, pass1);
            alert("Đăng ký tài khoản thành công");
            a = 0;
        }
        i++;
    }
}

function checkLogin() {
    var i = 1;
    user2 = document.getElementById('user2').value;
    pass2 = document.getElementById('pass2').value;
    while (true) {
        if (localStorage.getItem('tenTK' + i) == user2 || localStorage.getItem('tenTK' + i) == null)
            break;
        i++;
    }

    if (localStorage.getItem('tenTK' + i) == null) {
        alert("Tài khoản này chưa được đăng ký!");
        location.reload();
        return false;
    }

    if (localStorage.getItem('tenTK' + 'MK' + i) != pass2) {
        alert("Tên tài khoản hoặc mật khẩu không chính xác!");
        location.reload();
        return false;
    } else {
        localStorage.setItem('currentUser', user2);
        return false;
    }
}

function loggout() {
    var r = confirm("Bạn có muốn đăng xuất?");
    if (r == true) {
        location.reload();
        return localStorage.removeItem('currentUser'), sessionStorage.removeItem("cart"), alert("Đã đăng xuất"), window.location.href = "index.html";
    } else {

    }
}

function signin() {
    var a = "",
        b = "",
        c = "";
    localStorage.setItem('tenTK1', "Tuyet");
    localStorage.setItem('tenTKMK1', "tuyet12345");
    if (localStorage.getItem('currentUser') == localStorage.getItem('tenTK1')) {
        c += `<div>
            <a href="#"><button style="width:auto">Xin chào! Tuyết</button></a>
            <button onClick="loggout()" style="width:auto">Thoát</button>
            </div>`;
        document.getElementById("account-user").innerHTML = c;
    } else if (localStorage.getItem('currentUser') != null) {
        a = localStorage.getItem('currentUser');
        b += `<button onClick="loggout()" style="width:auto">Thoát</button>`;
        document.getElementById("account-user").innerHTML = "<div><a><button >Xin chào! " + a + "</button></a>" + b + "</div>";
    } else {
        c += `
    <div class="container-account" >
    <span id="login"><button onClick="document.getElementById('id01').style.display='block'" style="width:auto; margin-top: 5px;"><i class="fa fa-sign-in-alt"></i> Đăng nhập</button></span>
    <span id="signup"><button onClick="document.getElementById('id02').style.display='block'" style="width:auto;"><i class="fa fa-user-plus"></i> Đăng ký</button></a></span>
    </div>`;
        document.getElementById("account-user").innerHTML = c;
    }
}


function trangchu_index() {
    document.getElementById('product-list-bn').style.display = 'none';
    document.getElementById('preview-bn').style.display = 'none';
    document.getElementById('about_page').style.display = 'none';
}