document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const identifier = document.getElementById('identifier').value.trim();
  const password = document.getElementById('password').value.trim();
  const message = document.getElementById('loginMessage');

  if (!identifier || !password) {
    message.textContent = 'Please fill in all fields.';
    return;
  }

  // Simulated login logic
  if ((identifier === 'user@example.com' || identifier === '9876543210') && password === 'password123') {
    message.style.color = 'green';
    message.textContent = 'Login successful!';
  } else {
    message.style.color = 'red';
    message.textContent = 'Invalid credentials. Please try again.';
  }
});
