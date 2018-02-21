// simple example of using object to populate template
let welcomeData = {
  name: "The Pie Slice-ery",
  cakeType: [
    {
      cake: "Chocolate",
      topping: "Mint",
    },
    {
      cake: "Strawberry",
      topping: "Lemon"
    },
    {
      cake: "Carrot",
      topping: "Cream"
    }
  ]
};

module.exports = welcomeData;