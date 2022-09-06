var form = document.signupform;

function submitHandler(event) {
  // Prevent the page from reloading
  event.preventDefault();

  // Select values of name, email, and password from input values
  var name = form.name.value;
  var email = form.email.value;
  var password = form.password.value;

  // email must be in valid syntax
  if (!filter_var(email, FILTER_VALIDATE_EMAIL)) {
    alert("Invalid email format");
    return false;
  }

  // username must be alphanumeric
  if (/[^a-zA-Z0-9]/.test(name)) {
    alert("Input is not alphanumeric");
    return false;
  }

  // Password must be greater than or equal to 8 characters
  if (password.length <= 8) {
    form.password.classList.add("error");
    alert("Password must be atleast 8 characters");
    return false;
  }
}