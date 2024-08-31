let email = document.getElementById("email");
let password = document.getElementById("password");
let btnLogin = document.querySelector(".btn-login");

// get user local
const user_local = JSON.parse(localStorage.getItem("user"))
console.log(user_local)

btnLogin.addEventListener("click", (e) => {
    e.preventDefault();

    if (!email.value || !password.value) {
        alert("Vui lòng nhập đẩy đủ thông tin")
    }
    user_local.map(user_item => {
        if (user_item.email != email.value) {
            alert("email chưa được đăng ký!")
        } else {
            if (user_item.password != password.value) {
                alert("Sai mật khẩu")
            } else {
                alert("Đăng nhập thành công !")
                window.location.href = "./index.html";

                const user_login = {
                    email: email.value
                }

                localStorage.setItem("user_login", JSON.stringify(user_login))
            }
        }

    })

});