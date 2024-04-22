document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the email and password values
  var email = document.querySelector('input[type="text"]').value;
  var password = document.querySelector('input[type="password"]').value;

  // TODO: Add your own validation logic here

  // If the credentials are valid, you can redirect the user to another page
  if(email === 'user' && password === '0') {
      window.location.href = 'index.html';
  } else {
      alert('Invalid credentials');
  }
});
