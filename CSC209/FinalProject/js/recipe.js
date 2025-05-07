let recipes = [];

async function loadRecipes() {
  const response = await fetch("output/recipes.json");
  const all = await response.json();
  const username = localStorage.getItem("loggedInUser") || "Anonymous";
  recipes = window.userOnly
    ? all.filter(r => r.user === username || !r.user) 
    : all;

    displayRecipes(recipes);
  }

function displayRecipes(list) {
  const container = document.getElementById("recipeContainer");
  container.innerHTML = "";

  list.forEach((recipe, index) => {
    const recipeBlock = document.createElement("div");
    recipeBlock.className = "recipe-block";

    const img = document.createElement("img");
    img.src = recipe.image || "images/default.jpg";
    img.alt = recipe.title;

    const title = document.createElement("h3");
    title.textContent = recipe.title;
    title.onclick = () => {
      const content = document.getElementById(`detail-${index}`);
      content.style.display = content.style.display === "none" ? "block" : "none";
    };
    const detailDiv = document.createElement("div");
    detailDiv.className = "recipe-details";
    detailDiv.id = `detail-${index}`;
    detailDiv.innerHTML = `
      <p><strong>Ingredients:</strong><br>${recipe.ingredients.join("<br>")}</p>
      <p><strong>Instructions:</strong><br>${recipe.instructions}</p>
    `;

    recipeBlock.appendChild(img);
    recipeBlock.appendChild(title);
    recipeBlock.appendChild(detailDiv);
    container.appendChild(recipeBlock);
  });
}
function searchRecipes() {
  const keyword = document.getElementById("searchInput").value.toLowerCase();
  const excludeRaw = document.getElementById("excludeInput").value.toLowerCase();
  const excludeWords = excludeRaw.split(",").map(w => w.trim()).filter(w => w !== "");

  const filtered = recipes.filter(recipe => {
    const fullText = `${recipe.title} ${recipe.ingredients.join(" ")} ${recipe.instructions}`.toLowerCase();
    const matchesKeyword = keyword === "" ||
      recipe.title.toLowerCase().includes(keyword) ||
      recipe.ingredients.join(" ").toLowerCase().includes(keyword) ||
      recipe.instructions.toLowerCase().includes(keyword);

    const containsExcluded = excludeWords.some(word => fullText.includes(word));

    return matchesKeyword && !containsExcluded;
  });
  displayRecipes(filtered);
  document.getElementById("searchInput").value = "";
  document.getElementById("excludeInput").value = "";
}
function resetSearch() {
  document.getElementById("searchInput").value = "";
  document.getElementById("excludeInput").value = "";
  displayRecipes(recipes); 
}


window.onload = loadRecipes;