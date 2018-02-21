# Handlebars and Firebase - Yum!
Demo from class. Includes: browserify, grunt, and firebase calls.

## Goals
* Load data
* Display items on page utilizing browserify and ES6 template strings


### Get Started
1. Setup basic files and folder structure: index.html, sass/main.scss, css, dist, images, javascripts/main.js
2. Install Browserify
3. Setup Gruntfile
4. link app.js to the index.html
4. Start server and run grunt - make sure everything is working.


### Show me the Cakes!
1. Review json file
1. Import Firebase
1. Goal: Display each item in a card with click functionality.
1. Start `index.html`
1. `main.js`: Add requires
1. `main.js`: Create method to load inventory
1. `fetch-bakery.js`: Handles data. Create promise for load data and parse.
1. `fetch-bakery.js`: Export methods `module.exports = bakery;`
1. `main.js`: Create method to populate page - **how about a template**
1. `cake-grid.js`: Add to `main.js` `require`
