
function handleEmailSubmit() {
    var emailInput = document.querySelector('.signup input[type="email"]');
    var email = emailInput.value;
    if (email) {
        alert("Thank you for signing up with " + email + "!");
        emailInput.value = ''; 
    } else {
        alert("Please enter a valid email address.");
    }
}

document.querySelector('.signup .submit').addEventListener('click', handleEmailSubmit);
