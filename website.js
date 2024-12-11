
  const validUsername = 'customer123';
  const validPassword = 'customeroerder';

function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        return false; 
    }
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;  {

}


 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

  
    alert("Thank you for reaching out to us!");
    return true;
}
