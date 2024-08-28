/**
* PHP Email Form Validation - v3.9
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector(".php-email-form");
  form.addEventListener("submit", function(event) {
      event.preventDefault();

      const formData = new FormData(form);
      const action = form.getAttribute("action");

      fetch(action, {
          method: "POST",
          body: formData,
      })
      .then(response => response.text())
      .then(data => {
          if (data.includes("Thank you! Your message has been sent.")) {
              document.querySelector(".sent-message").style.display = "block";
              form.reset();
          } else {
              document.querySelector(".error-message").style.display = "block";
              document.querySelector(".error-message").innerHTML = data;
          }
      })
      .catch(error => {
          document.querySelector(".error-message").style.display = "block";
          document.querySelector(".error-message").innerHTML = "An error occurred: " + error;
      });
  });
});
