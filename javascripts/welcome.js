"use strict";

let welcomeData = require('./welcome-data');

let showWelcome = () =>{
   let welcomeObj = welcomeData;
   let cakeDesc = `<p>We bake the most delicious cake varieties like `;

   welcomeObj.cakeType.forEach((element) => {
      cakeDesc += `${element.cake} ${element.topping}, `;
   });

   let block = `<h2>${welcomeObj.name}!</h2>
   ${cakeDesc}
   </p>`;

   return block;
};


module.exports = {showWelcome};