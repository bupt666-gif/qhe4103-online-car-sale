window.onload = function() {
  "use strict";
  initNav();
  setActiveLink();
};
function initNav() {
  var toggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");
  if (toggle && navLinks) {
    toggle.onclick = function() {
      if (toggle.className.indexOf("open") === -1) {
        toggle.className = "nav-toggle open";
        navLinks.className = "nav-links open";
      } else {
        toggle.className = "nav-toggle";
        navLinks.className = "nav-links";
      }
    };
    var links = navLinks.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
      links[i].onclick = function() {
        toggle.className = "nav-toggle";
        navLinks.className = "nav-links";
      };
    }
  }
}
function setActiveLink() {
  var currentPath = window.location.pathname.split("/").pop() || "index.html";
  var links = document.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    var href = links[i].getAttribute("href");
    if (href) {
      var hrefName = href.split("/").pop();
      if (hrefName === currentPath) {
        links[i].className = "active";
      }
    }
  }
}
function validateForm() {
  let name = document.getElementById("name").value.trim();
  let address = document.getElementById("address").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let email = document.getElementById("email").value.trim();
  let user = document.getElementById("user").value.trim();
  let pwd = document.getElementById("pwd").value.trim();
  let regName = /^[A-Za-z ]+$/;
  if (!regName.test(name)) {
    alert("Name can only contain letters and space");
    return false;
  }

  let regAddr = /^[A-Za-z0-9 ]+$/;
  if (!regAddr.test(address)) {
    alert("Address can only contain letters, numbers and space");
    return false;
  }

  let regPhone = /^1[3-9]\d{9}$/;
  if (!regPhone.test(phone)) {
    alert("Please enter valid China phone number");
    return false;
  }

  let regEmail = /^[^@]+@[^@]+\.(com|cn)$/;
  if (!regEmail.test(email)) {
    alert("Email must have one @ and end with .com or .cn");
    return false;
  }

  let regUser = /^[A-Za-z0-9]{6,}$/;
  if (!regUser.test(user)) {
    alert("Username must be at least 6 letters/numbers");
    return false;
  }
  let regPwd = /^[A-Za-z0-9]{6,}$/;
  if (!regPwd.test(pwd)) {
    alert("Password must be at least 6 letters/numbers");
    return false;
  }

  alert("Registration success!");
  return true;
}