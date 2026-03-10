export interface Pizza {
  name: string;
  description: string;
  price: string;
  toppings: string[];
}

export const menuItems: Pizza[] = [
  {
    name: "Pete's Classic",
    description: "Our signature pizza with house-made sauce and premium mozzarella",
    price: "$16.99",
    toppings: ["Tomato Sauce", "Mozzarella", "Fresh Basil", "Olive Oil"]
  },
  {
    name: "Meat Lovers",
    description: "Loaded with your favorite Italian meats",
    price: "$21.99",
    toppings: ["Pepperoni", "Italian Sausage", "Bacon", "Mozzarella"]
  },
  {
    name: "Garden Fresh",
    description: "Fresh vegetables on a crispy crust",
    price: "$18.99",
    toppings: ["Bell Peppers", "Onions", "Mushrooms", "Olives", "Tomatoes"]
  },
  {
    name: "Spicy Italian",
    description: "For those who like it hot!",
    price: "$19.99",
    toppings: ["Pepperoni", "Sausage", "Hot Peppers", "Red Pepper Flakes"]
  }
];
