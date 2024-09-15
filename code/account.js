var loginform = document.getElementById("loginform");
var registerform = document.getElementById("registerform");
var indicator = document.getElementById("indicator");

function register() {
  registerform.style.transform = "translateX(0px)";
  loginform.style.transform = "translateX(0px)";
  indicator.style.transform = "translateX(100px)";
}
function login() {
  registerform.style.transform = "translateX(300px)";
  loginform.style.transform = "translateX(300px)";
  indicator.style.transform = "translateX(0px)";
}
