# Final Project Documentation: Meal Planner & Recipe Organizer Web App
- **Chris Wu**

---

## Project Overview

The Meal Planner & Recipe Organizer is a full-stack web application that enables users to upload, search, and manage personal recipes, plan meals on a dynamic calendar, and filter recipes based on allergens or unwanted ingredients. It features admin controls for user management and is implemented using HTML, CSS, JavaScript, and PHP, with data stored in JSON files.

---

## Features

- ✅ User registration, login, logout, and admin authentication
- ✅ Recipe upload with optional image and text file; preview before upload
- ✅ Recipe search with ingredient/allergen exclusion
- ✅ Interactive calendar to assign meals by day
- ✅ Downloadable weekly meal plan
- ✅ Profile page to view user-specific recipe uploads
- ✅ Admin dashboard to view/delete users
- ✅ JavaScript graphic: animated recipe icon moving across the page

---

## Instructions

1. Go to `login.html` to register or log in.
2. After logging in, go to `main.html` to upload recipes.
3. Use `recipe.html` to view and filter recipes.
3. Use `calendar.html` to assign recipes to any day of the week.
4. Use the exclusion input to filter out recipes containing allergens (e.g., “nuts”).
5. Download your week’s plan via the button.
6. If logged in as admin (`admin` / `123`), go to `admin.html` to manage users.

---

## Requirement Fulfillment

| Requirement | Implementation |
|-------------|----------------|
| **Full Web App** | Implemented HTML/CSS/JS/PHP across pages |
| **JSON File Storage** | `recipes.json` and `users.json` for persistent data |
| **Coherent Theme** | Meal planning and recipe organization across all features |
| **Users & Admin** | Login/Register with admin login credential and dashboard (`admin.html`) |
| **User Data Management** | Users Data all store in JSON file |
| **Dynamic Pages** | DOM updates via JS, content fetched via PHP |
| **Self-Researched Feature** | Image/Text Preview with HTML5 File API & Asynchronous Programming with JavaScript|
| **Original Code** | PHP login, admin, moving graphics are adopted from previous homework |
| **JavaScript Graphics** | Animated recipe icon moving across the screen |
| **Interactive Local & Server Features** | Recipe filtering, login, recipe deletion |

---
