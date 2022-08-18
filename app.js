const password = document.getElementById("password");
const passwordConf = document.getElementById("password-conf");
const error = document.getElementById("error-msg");

function validate() {
  if (password.value !== passwordConf.value) {
    passwordConf.setCustomValidity("Error: passwords must match.  Try again.");
    password.style.borderColor = "red";
    passwordConf.style.borderColor = "red";
    error.textContent = "*Passwords do not match";
    error.classList.add("error");
  } else {
    passwordConf.setCustomValidity("");
    error.textContent = "";
    password.style.borderColor = "green";
    passwordConf.style.borderColor = "green";
  }
}

password.onchange = validate;
passwordConf.onkeyup = validate;
