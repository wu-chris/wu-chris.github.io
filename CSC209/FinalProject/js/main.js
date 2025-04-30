let allRecipes = [];
    document.getElementById('image').addEventListener('change', function (e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
          document.getElementById('previewArea').innerHTML = `<img src="${event.target.result}" alt="Preview" />`;
        };
        reader.readAsDataURL(file);
      }
    });
  
    function format(text) {
      return text.replace(/&/g, "&amp;")
                 .replace(/</g, "&lt;")
                 .replace(/>/g, "&gt;");
    }
  
    document.getElementById('textFile').addEventListener('change', function (e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
          document.getElementById('previewArea').innerHTML += `<pre>${format(event.target.result)}</pre>`;
        };
        reader.readAsText(file);
      }
    });

    document.getElementById("uploadForm").addEventListener("submit", function (e) {
      e.preventDefault();
    
      const formData = new FormData();
      const username = localStorage.getItem("loggedInUser") || "Anonymous";
    
      formData.append("title", document.getElementById("title").value);
      formData.append("ingredients", JSON.stringify(
        document.getElementById("ingredients").value.split(",").map(s => s.trim())
      ));
      formData.append("instructions", document.getElementById("instructions").value);
      formData.append("username", username);
    
      const image = document.getElementById("image").files[0];
      if (image) formData.append("image", image);
    
      const textFile = document.getElementById("textFile").files[0];
      if (textFile) formData.append("textFile", textFile);
    
      fetch("php/saveRecipe.php", {
        method: "POST",
        body: formData
      })
      .then(res => res.json())
      .then(data => {
        alert(data.message);
        document.getElementById("uploadForm").reset();
      })
      .catch(err => {
        console.error("Error uploading:", err);
        alert("Upload failed.");
      });
    });
  
    function isValidRecipe(r) {
      return r.title && r.ingredients && typeof r.instructions === 'string';
    }
  
    function loadRecipes() {
      fetch('php/loadRecipes.php')
        .then(res => res.json())
        .then(recipes => {
          allRecipes = recipes.filter(isValidRecipe);
          renderRecipes(allRecipes);
        });
    }
  
    function renderRecipes(recipes) {
      const container = document.getElementById('recipeList');
      container.innerHTML = '';
      recipes.forEach(recipe => {
        const div = document.createElement('div');
        div.classList.add('recipe');
  
        const title = document.createElement('h3');
        title.textContent = recipe.title;
  
        const content = document.createElement('div');
        content.classList.add('recipe-content');
        content.innerHTML = `
          <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
          <p><strong>Instructions:</strong><br>${recipe.instructions.replace(/\n/g, "<br>")}</p>
          ${recipe.image ? `<img src="${recipe.image}" alt="Recipe Image" />` : ''}
        `;
  
        title.addEventListener('click', () => {
          content.style.display = content.style.display === 'none' ? 'block' : 'none';
        });
  
        div.appendChild(title);
        div.appendChild(content);
        container.appendChild(div);
      });
    }
  
    document.getElementById('searchButton').addEventListener('click', () => {
      const keyword = document.getElementById('searchInput').value.toLowerCase();
      const filtered = allRecipes.filter(r => r.title.toLowerCase().includes(keyword));
      renderRecipes(filtered);
    });
    document.getElementById('resetButton').addEventListener('click', () => {
      document.getElementById('searchInput').value = '';
      renderRecipes(allRecipes);
    });
    window.addEventListener('DOMContentLoaded', loadRecipes);