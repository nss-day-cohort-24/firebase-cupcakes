"use strict";

let myDemo = document.getElementById("demo");
console.log("demo", myDemo);


let cakeInventory = require('./fetch-bakery'),
   cakeTemplate = require('./cake-grid'),
   welcomeTemplate = require('./welcome');

let welcomeDiv = document.createElement("header");
welcomeDiv.innerHTML = welcomeTemplate.showWelcome();
document.getElementById('welcome').append(welcomeDiv);


function populatePage(sweetArray){
   let newDiv = document.createElement("div");
   console.log("sweetArray", sweetArray);
   newDiv.innerHTML = sweetArray.map(cakeTemplate.makeGridItem);
   document.getElementById("cake-cards").append(newDiv);
}

cakeInventory.loadInventory()
.then(
	(inventoryFromLoadInventoryResolve) => {
		console.log("Cake Promise", inventoryFromLoadInventoryResolve);
		populatePage(inventoryFromLoadInventoryResolve);
	},
	(reject) => {
		console.log("SOMETHING WENT REALLY WRONG");
	});