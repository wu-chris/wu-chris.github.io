function format(text) {
  return text.replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
}
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


  
  
    