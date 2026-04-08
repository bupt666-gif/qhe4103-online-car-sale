function validateForm() {
    let name = document.getElementById("name").value.trim();
    let address = document.getElementById("address").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let user = document.getElementById("user").value.trim();
    let pwd = document.getElementById("pwd").value.trim();

    // 1. 姓名：只能字母和空格
    let regName = /^[A-Za-z ]+$/;
    if (!regName.test(name)) {
        alert("Name error: Only letters and space are allowed");
        return false;
    }

    // 2. 地址：字母数字空格
    let regAddr = /^[A-Za-z0-9 ]+$/;
    if (!regAddr.test(address)) {
        alert("Address error: Only letters, numbers and space are allowed");
        return false;
    }

    // 3. 手机号：中国手机号规则
    let regPhone = /^1[3-9]\d{9}$/;
    if (!regPhone.test(phone)) {
        alert("Phone error: Please enter a valid China mobile number (11 digits, start with 1)");
        return false;
    }

    // 4. 邮箱：有@，以.com或.cn结尾
    let regEmail = /^[^@]+@[^@]+\.(com|cn)$/;
    if (!regEmail.test(email)) {
        alert("Email error: Must contain @ and end with .com or .cn");
        return false;
    }

    // 5. 用户名：6位以上字母数字
    let regUser = /^[A-Za-z0-9]{6,}$/;
    if (!regUser.test(user)) {
        alert("Username error: Must be at least 6 characters (letters/numbers only)");
        return false;
    }

    // 6. 密码：6位以上字母数字
    let regPwd = /^[A-Za-z0-9]{6,}$/;
    if (!regPwd.test(pwd)) {
        alert("Password error: Must be at least 6 characters (letters/numbers only)");
        return false;
    }

    alert("Registration successful!");
    return true;
}