document
.getElementById("contactForm")
.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Check if fields are empty
  if (name === "" || email === "" || message === "") {
    alert("Please fill out the form");
  } else {
    alert("Thank you");
    // Optionally, you can reset the form after submission
    this.reset();
  }
});