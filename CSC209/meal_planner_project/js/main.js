document.getElementById('uploadForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const title = document.getElementById('title').value;
  const ingredients = document.getElementById('ingredients').value.split(',');
  const instructions = document.getElementById('instructions').value;

  const recipe = {
    title: title,
    ingredients: ingredients.map(i => i.trim()),
    instructions: instructions
  };

  fetch('php/saveRecipe.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(recipe)
  })
  .then(res => res.json())
  .then(data => alert(data.message));
});

window.addEventListener('DOMContentLoaded', () => {
  fetch('php/loadRecipes.php')
    .then(res => res.json())
    .then(recipes => {
      const container = document.getElementById('recipeList');
      recipes.forEach(recipe => {
        const div = document.createElement('div');
        div.classList.add('recipe');
        div.innerHTML = `<h3>${recipe.title}</h3><p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p><p><strong>Instructions:</strong> ${recipe.instructions}</p>`;
        container.appendChild(div);
      });
    });
});
