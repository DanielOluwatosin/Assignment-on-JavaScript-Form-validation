document.getElementById("registrationForm").addEventListener("submit", function(event) {
    // Prevent form submission
    event.preventDefault();
    
    // Clear previous error messages
    document.querySelectorAll(".error").forEach((el) => el.textContent = "");
  
    // Validate Name
    const name = document.getElementById("name").value.trim();
    if (!name) {
      document.getElementById("nameError").textContent = "Name is required.";
      return;
    }
  
    // Validate Email
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email || !emailPattern.test(email)) {
      document.getElementById("emailError").textContent = "Enter a valid email address.";
      return;
    }
  
    // Validate Password
    const password = document.getElementById("password").value;
    if (password.length < 8) {
      document.getElementById("passwordError").textContent = "Password must be at least 8 characters.";
      return;
    }
  
    // Validate Confirm Password
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
      document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
      return;
    }
  
    // Validate Age
    const age = parseInt(document.getElementById("age").value, 10);
    if (isNaN(age) || age < 18 || age > 100) {
      document.getElementById("ageError").textContent = "Enter a valid age between 18 and 100.";
      return;
    }
  
    // Validate Gender
    const gender = document.querySelector("input[name='gender']:checked");
    if (!gender) {
      document.getElementById("genderError").textContent = "Please select a gender.";
      return;
    }
  
    // Validate Country
    const country = document.getElementById("country").value;
    if (!country) {
      document.getElementById("countryError").textContent = "Please select a country.";
      return;
    }
  
    // Validate Terms and Conditions
    const terms = document.getElementById("terms").checked;
    if (!terms) {
      document.getElementById("termsError").textContent = "You must agree to the Terms and Conditions.";
      return;
    }
  
    // If all validations pass
    alert("Registration successful!");
  });
  
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    // Prevent form submission
    event.preventDefault();
    
    // Clear previous error messages
    document.getElementById("loginEmailError").textContent = "";
    document.getElementById("loginPasswordError").textContent = "";
  
    // Validate Email
    const loginEmail = document.getElementById("loginEmail").value.trim();
    if (!loginEmail || !emailPattern.test(loginEmail)) {
      document.getElementById("loginEmailError").textContent = "Enter a valid email address.";
      return;
    }
  
    // Validate Password
    const loginPassword = document.getElementById("loginPassword").value;
    if (loginPassword.length < 8) {
      document.getElementById("loginPasswordError").textContent = "Password must be at least 8 characters.";
      return;
    }
  
    // If all validations pass
    alert("Login successful!");
  });  