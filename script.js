document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  const formMessages = document.getElementById("form-messages");

  contactForm.addEventListener("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Clear previous messages
    formMessages.textContent = "";
    formMessages.className = "";

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic validation
    if (name === "" || email === "" || message === "") {
      formMessages.textContent = "Please fill out all fields.";
      formMessages.classList.add("error");
      return;
    }

    // Email format validation (simple regex)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      formMessages.textContent = "Please enter a valid email address.";
      formMessages.classList.add("error");
      return;
    }

    // If validation passes
    formMessages.textContent =
      "Thank you! Your message has been sent successfully.";
    formMessages.classList.add("success");

    // Reset the form
    contactForm.reset();
  });
});
