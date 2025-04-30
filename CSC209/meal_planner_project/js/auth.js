function registerUser(username, password) {
  fetch('php/register.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  })
  .then(res => res.json())
  .then(data => alert(data.message));
}

function loginUser(username, password) {
  fetch('php/login.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  })
  .then(res => res.json())
  .then(data => {
    alert(data.message);
    if (data.success) {
      localStorage.setItem("loggedInUser", username);
      window.location.href = "index.html";
    }
  });
}
