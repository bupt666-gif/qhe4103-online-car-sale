function loginCheck() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "admin" && password == "123456") {
        alert("Login success");
        return true;
    } else {
        alert("Username or password error");
        return false;
    }
}
