let recipes = [];

    async function loadRecipes() {
      const response = await fetch("output/recipes.json");
      // recipes = await response.json();
      const all = await response.json();
      const username = localStorage.getItem("loggedInUser") || "Anonymous";
      recipes = window.userOnly
        ? all.filter(r => r.user === username || !r.user) // include public or user recipes
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
    function resetSearch() {
  document.getElementById("searchInput").value = "";
  displayRecipes(recipes); // show all recipes
}

    function searchRecipes() {
      const keyword = document.getElementById("searchInput").value.toLowerCase();
      const filtered = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(keyword) ||
        recipe.ingredients.join(" ").toLowerCase().includes(keyword) ||
        recipe.instructions.toLowerCase().includes(keyword)
      );
      displayRecipes(filtered);
      document.getElementById("searchInput").value = ""; // reset
    }

    window.onload = loadRecipes;