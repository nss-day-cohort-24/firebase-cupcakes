"use strict";


let makeGridItem = (item, index) => {
   let sold = `<span class="cake-soldout">BUY</span>`;
   let purchased = item.purchased;
   if (purchased) {
      sold = `<span class="cake-soldout">SOLD OUT!</span>`;
   }

   let block = `<section id="card--${index}" class="card-wrapper" style="border: 2px solid ${item.color}">
   <h3>#${index} CakeType: ${item.typeId}</h3>
   <div class="card-img" style="background-image: url('images/${item.image}')"></div>
   <h4>${item.flavor}  ${item.kind}</h4>
   <div class="cake-price">${item.price}</div>
   ${sold}
   <p class="card-copy">${item.description}</p></section>`;

   return block;
};


module.exports = { makeGridItem };