# Final Project Documentation: Meal Planner & Recipe Organizer Web App

## Contributors
- **Chris Wu**

---

## Project Overview

The Meal Planner & Recipe Organizer is a full-stack web application that enables users to upload, search, and manage personal recipes, plan meals on a dynamic calendar, and filter recipes based on allergens or unwanted ingredients. It features admin controls for user management and is implemented using HTML, CSS, JavaScript, and PHP, with data stored in JSON files.

---

## Features

- ✅ User registration, login, logout, and admin authentication
- ✅ Recipe upload with image and optional text file
- ✅ Recipe search with ingredient/allergen exclusion
- ✅ Interactive calendar to assign meals by day
- ✅ Downloadable weekly meal plan
- ✅ Profile page to view user-specific recipe uploads
- ✅ Admin dashboard to view/delete users
- ✅ JavaScript graphic: animated recipe image moving diagonally across the page

---

## Instructions

1. Go to `login.html` to register or log in.
2. After logging in, go to `main.html` to upload/view recipes.
3. Use `calendar.html` to assign recipes to any day of the week.
4. Use the exclusion input to filter out recipes containing allergens (e.g., “nuts”).
5. Download your week’s plan via the button.
6. If logged in as admin (`admin` / `123`), go to `admin.html` to manage users.

---

## Requirement Fulfillment

| Requirement | Implementation |
|-------------|----------------|
| **Full Web App (HTML/CSS/JS/PHP)** | Implemented across multiple pages |
| **JSON File Storage** | `recipes.json` and `users.json` for persistent data |
| **Coherent Theme** | Meal planning and recipe organization across all features |
| **Users & Admin** | Login/Register with admin dashboard (`admin.html`) |
| **User Data Management** | Users can upload and see only their recipes |
| **Dynamic Pages** | DOM updates via JS, content fetched via PHP |
| **Non-Hardcoded Elements** | Recipes and calendar content are generated from JSON |
| **Self-Researched Feature** | Diagonal animated icon using `requestAnimationFrame` |
| **Original Code** | PHP login, recipe handling, and JS filtering/calendar logic |
| **JavaScript Graphics** | Animated recipe icon moving across the screen |
| **Interactive Local & Server Features** | Client-side filtering, server-side login, user deletion |

---

## Outside Sources Used

- **W3Schools JavaScript Demos**  
  Used for `requestAnimationFrame` to animate the recipe icon

- **MDN Web Docs**  
  Referenced for `fetch()`, DOM manipulation, and form handling

---

## Homework Referenced

- **HW 4 (Recipe UI Layout):** Recipe card styling and toggling behavior
- **HW 5 (Form/Filter):** Search and exclude feature logic
- **HW 6 (Login System):** Session validation and login handling with PHP/JS
- **HW 7 (JS Animation):** Used for implementing image movement

---

## Contribution Breakdown

- **Chris Wu:** Full-stack implementation, including all JavaScript modules, PHP backend logic, calendar system, user authentication, and animation integration.

---

## File & Folder Structure

