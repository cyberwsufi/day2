# Main Character Portfolio — Static CMS

## Run
1. Extract the ZIP.
2. Open `index.html` in a browser.
3. Open `admin.html` to edit portfolio content.
4. Changes are stored in browser localStorage and immediately appear when the home page is refreshed.

## Structure
- `index.html` — public portfolio
- `admin.html` — admin/control panel
- `css/style.css` — portfolio design + responsive animations
- `css/admin.css` — admin UI
- `js/data.js` — demo content/default data
- `js/app.js` — portfolio interactions
- `js/admin.js` — CRUD-style browser CMS

## Important
This is intentionally backend-free HTML/CSS/JavaScript. The admin page is suitable for local/static use, but it is **not a secure production authentication system**. For a public deployed CMS, connect the same UI to a backend/database and add authentication.
