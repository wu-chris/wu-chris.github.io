let selectedDay = null;

function initCalendar() {
  const calendarGrid = document.getElementById("calendarGrid");
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  days.forEach(day => {
    const dayDiv = document.createElement("div");
    dayDiv.className = "day";
    dayDiv.innerHTML = `<h3>${day}</h3><div class="recipe-slot"></div>
      <div class="add-recipe-btn" onclick="openModal('${day}')">+ Add</div>`;
    calendarGrid.appendChild(dayDiv);
  });
}

function openModal(day) {
  selectedDay = day;
  document.getElementById("recipeModal").style.display = "flex";
  loadAndShowRecipesForModal();
}

function closeModal() {
  document.getElementById("recipeModal").style.display = "none";
}

async function loadAndShowRecipesForModal() {
  const response = await fetch("output/recipes.json");
  const allRecipes = await response.json();
  const excludeRaw = document.getElementById("excludeIngredients")?.value.toLowerCase() || "";
  const excludeWords = excludeRaw.split(",").map(w => w.trim()).filter(Boolean);

  const filteredRecipes = allRecipes.filter(recipe => {
    const text = `${recipe.title} ${recipe.ingredients.join(" ")} ${recipe.instructions}`.toLowerCase();
    return !excludeWords.some(word => text.includes(word));
  });

  displayRecipesInModal(filteredRecipes);
}

function displayRecipesInModal(recipes) {
  const container = document.getElementById("recipeList");
  container.innerHTML = "";

  if (recipes.length === 0) {
    container.innerHTML = "<p>No recipes match your filters.</p>";
    return;
  }

  recipes.forEach(recipe => {
    const div = document.createElement("div");
    div.className = "recipe-item";
    div.textContent = recipe.title;
    div.onclick = () => deleteR(recipe);
    container.appendChild(div);
  });
}

function deleteR(recipe) {
  const dayBoxes = document.querySelectorAll(".day");
  dayBoxes.forEach(box => {
    if (box.querySelector("h3").textContent === selectedDay) {
      const slot = box.querySelector(".recipe-slot");

      const item = document.createElement("div");
      item.className = "calendar-recipe";

      const title = document.createElement("span");
      title.textContent = recipe.title;

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "❌";
      removeBtn.className = "remove-btn";
      removeBtn.onclick = () => item.remove();

      item.appendChild(title);
      item.appendChild(removeBtn);
      slot.appendChild(item);
    }
  });
  closeModal();
}

function showRecipeDetails(recipe) {
  const panel = document.getElementById("recipeDetails");
  panel.innerHTML = `
    <h3>${recipe.title}</h3>
    <p><strong>Ingredients:</strong><br>${recipe.ingredients.join("<br>")}</p>
    <p><strong>Instructions:</strong><br>${recipe.instructions}</p>
  `;
}

function downloadWeekPlan() {
  const days = document.querySelectorAll(".day");
  let content = "Weekly Meal Plan:\n\n";

  days.forEach(day => {
    const dayName = day.querySelector("h3").textContent;
    const recipes = Array.from(day.querySelectorAll(".calendar-recipe")).map(r => "- " + r.textContent).join("\n");
    content += `${dayName}:\n${recipes || "No recipe"}\n\n`;
  });

  const blob = new Blob([content], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "meal_plan.txt";
  link.click();
}

window.onload = () => {
  initCalendar();
  const modalContent = document.querySelector(".modal-content");
  const excludeInput = document.createElement("input");
  excludeInput.type = "text";
  excludeInput.placeholder = "Exclude ingredients or allergens (comma-separated)";
  excludeInput.className = "exclude-filter";
  excludeInput.id = "excludeIngredients";
  excludeInput.oninput = loadAndShowRecipesForModal;
  modalContent.insertBefore(excludeInput, modalContent.children[1]); // insert above #recipeList
};
