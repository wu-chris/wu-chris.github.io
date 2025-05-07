function checkAdminAccess() {
  const username = localStorage.getItem("loggedInUser");
  const password = localStorage.getItem("loggedInPassword");

  if (username !== "admin" || password !== "123") {
    alert("Access denied. Only admin can view this page.");
    window.location.href = "login.html";
  } else {
    fetch('php/session.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
    .then(() => fetch('php/admin.php'))
    .then(res => {
      if (!res.ok) throw new Error("Failed to load admin data: " + res.statusText);
      return res.json();
    })
    .then(data => {
      const tbody = document.querySelector("#userTable tbody");
      Object.entries(data).forEach(([user, pass]) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${user}</td>
          <td>${pass}</td>
          <td><button onclick="deleteUser('${user}')">❌ Delete</button></td>
        `;
        tbody.appendChild(row);
      });
    })
    .catch(err => {
      alert("Failed to load user data.");
      console.error(err);
    });
  }
}

function deleteUser(user) {
  if (confirm(`Are you sure you want to delete user: ${user}?`)) {
    fetch('php/delete.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: user })
    })
    .then(res => res.text())
    .then(response => {
      alert(response);
      window.location.reload(); 
    })
    .catch(err => {
      alert("Failed to delete user.");
      console.error(err);
    });
  }
}

