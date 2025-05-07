function loginUser(username, password) {
  fetch('php/login.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  })
  .then(response => {
      if (!response.ok) {
          throw new Error(response.statusText);
      }
      return response.json();
  })
  .then(data => {
      alert(data.message);
      if (data.success) {
          localStorage.setItem("loggedInUser", username);
          localStorage.setItem("loggedInPassword", password); 

          if (username === "admin" && password === "123") {
              window.location.href = "admin.html"; 
          } else {
              window.location.href = "main.html"; 
          }
      }
  })
  .catch(error => {
      console.error("Login error:", error.message);
  });
}

function registerUser(username, password) {
    fetch('php/register.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
          }
        return response.json();
    })
    .then(data => alert(data.message))
    .catch(error => {
        throw new Error(error.message);
    });
}