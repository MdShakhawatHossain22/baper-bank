// step-1: add click even handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  //step-2: get the email address inside the email input field
  //   always remember to use. value to get text from an input field
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  //   step-3: get password
  /**
   * set id on the html
   * get the element
   * get the value from the element
   */
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;
  //Danger: Do not verify email password on the client side
  /**Step-4: Verify email and password
   *
   */
  if (email === "email" && password === "password") {
    window.location.href = "bank.html";
  } else {
    alert("Wrong password. Please Wrigth Password Inside in the field");
  }
});

// bank page
