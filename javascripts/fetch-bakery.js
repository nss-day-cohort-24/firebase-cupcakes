"use strict";

let inventory = [];
let bakery = {};

function fillTheInventory (data) {
    let keys = Object.keys(data);
    keys.forEach((item)=> {
       //console.log("keys", keys);
       //add the firebaseID to the object
    	data[item].firebaseID = item;
    	inventory.push(data[item]);
	});
    	console.log("inventory after fill:", inventory);
}

//get inventory
bakery.getInventory = () => {
	return inventory;
};

//load data xhr
bakery.loadInventory = () => {
	let val = 1;
	return new Promise ( function (resolve, reject){
		let inventoryLoader = new XMLHttpRequest();

      inventoryLoader.open("GET", `https://awesome-data-c03ef.firebaseio.com/items.json?orderBy="typeId"&equalTo="${val}"`);
      // one item https://awesome-data-c03ef.firebaseio.com/items/0.json
		// console.log("inventoryLoader val", `https://awesome-data-c03ef.firebaseio.com/items.json?orderBy="typeId"&equalTo="${val}"`);
		inventoryLoader.send();

		inventoryLoader.addEventListener("load", function(){
			let data = JSON.parse(this.responseText);
			console.log("data", data);
			fillTheInventory(data);
			// console.log("inventory", inventory);
			resolve(inventory);
		});
	});
};

// load data ajax
// bakery.loadInventory = () => {
// 	return new Promise( function(resolve, reject){
//     $.ajax({
//       url: `https://awesome-data-c03ef.firebaseio.com/items.json?orderBy="typeId"&equalTo="1"`
//     })
//     .done(function(data) {
//     	fillInventory(data);
//     	// console.log('inventory', data);
//       resolve(inventory);
//     })
//     .fail(reject);
//   });
// };

console.log("what is the bakery", bakery);
module.exports = bakery;
