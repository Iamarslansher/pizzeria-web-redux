const PIZZAS = [
  {
    id: 1,
    name: "Margherita",
    ingredients: ["Tomato Sauce", "Mozzarella", "Basil"],
    price: 8.99,
    image:
      "https://media.istockphoto.com/id/686957124/photo/pizza-margherita.jpg?s=612x612&w=0&k=20&c=STQALvMIjcgXPIvpXXUXItAl05QtbmEUQ_PfwSato48=",
  },
  {
    id: 2,
    name: "Pepperoni",
    ingredients: ["Tomato Sauce", "Mozzarella", "Pepperoni"],
    price: 10.99,
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVwcGVyb25pJTIwcGl6emF8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "BBQ Chicken",
    ingredients: ["BBQ Sauce", "Chicken", "Mozzarella", "Onions"],
    price: 11.99,
    image:
      "https://i0.wp.com/www.slapyodaddybbq.com/wp-content/uploads/BBQChickenPizza-foodgawker.jpg?fit=600%2C600&ssl=1",
  },
  {
    id: 4,
    name: "Hawaiian",
    ingredients: ["Tomato Sauce", "Mozzarella", "Ham", "Pineapple"],
    price: 9.99,
    image:
      "https://www.shutterstock.com/image-photo/hawaiian-pizza-on-old-board-260nw-300239519.jpg",
  },
  {
    id: 5,
    name: "Veggie",
    ingredients: [
      "Tomato Sauce",
      "Mozzarella",
      "Bell Peppers",
      "Olives",
      "Onions",
    ],
    price: 8.49,
    image:
      "https://www.orchidsandsweettea.com/wp-content/uploads/2019/05/Veggie-Pizza-2-of-5.jpg",
  },
  {
    id: 6,
    name: "Four Cheese",
    ingredients: [
      "Tomato Sauce",
      "Mozzarella",
      "Parmesan",
      "Blue Cheese",
      "Feta",
    ],
    price: 12.49,
    image:
      "https://pizzapro.in/cdn/shop/articles/four-cheese-pizza-pizza-pro.jpg?v=1645080271",
  },
  {
    id: 7,
    name: "Meat Lovers",
    ingredients: [
      "Tomato Sauce",
      "Mozzarella",
      "Pepperoni",
      "Sausage",
      "Ham",
      "Bacon",
    ],
    price: 13.99,
    image:
      "https://media.istockphoto.com/id/483367738/photo/homemade-meat-loves-pizza.jpg?s=612x612&w=0&k=20&c=NCrwrMA8vuUR5ABRZKTtIaOvAC96RAPjnxXi5fFG8RQ=",
  },
  {
    id: 8,
    name: "Buffalo Chicken",
    ingredients: ["Buffalo Sauce", "Chicken", "Mozzarella", "Ranch"],
    price: 11.49,
    image:
      "https://embed.widencdn.net/img/mccormick/7kdrro9xb6/840x840px/Frank's%20RedHot%20Buffalo%20Chicken%20Pizza_2019-05-24_TSUCALAS_%209544.jpg?crop=true&q=80&u=1zsthd",
  },
  {
    id: 9,
    name: "Spinach Alfredo",
    ingredients: ["Alfredo Sauce", "Mozzarella", "Spinach", "Garlic"],
    price: 10.99,
    image:
      "https://wholefully.com/wp-content/uploads/2011/10/chicken-spinach-alfredo-pizza-hero-scaled.jpg",
  },
  {
    id: 10,
    name: "Mushroom",
    ingredients: ["Tomato Sauce", "Mozzarella", "Mushrooms", "Parsley"],
    price: 9.49,
    image:
      "https://img.freepik.com/free-photo/pizza-with-meat-mushrooms_140725-5402.jpg",
  },
  {
    id: 11,
    name: "Veggie Delight",
    ingredients: [
      "Tomato Sauce",
      "Mozzarella",
      "Mushrooms",
      "Onions",
      "Bell Peppers",
      "Tomatoes",
    ],
    price: 10.99,
    image:
      "https://images.mrcook.app/recipe-image/0191d5f0-1a26-70d9-8441-2861ea8f4129",
  },
  {
    id: 12,
    name: "Seafood Extravaganza",
    ingredients: [
      "Tomato Sauce",
      "Mozzarella",
      "Shrimp",
      "Scallops",
      "Crab Meat",
      "Anchovies",
    ],
    price: 14.99,
    image:
      "https://thumbs.dreamstime.com/b/delight-seaside-extravaganza-seafood-pizza-overflowing-plump-shrimp-briny-clams-tender-squid-all-elegantly-318583686.jpg",
  },

  {
    id: 14,
    name: "Greek Pizza",
    ingredients: [
      "Tomato Sauce",
      "Mozzarella",
      "Feta",
      "Kalamata Olives",
      "Artichoke Hearts",
      "Sun-dried Tomatoes",
    ],
    price: 13.49,
    image:
      "https://inquiringchef.com/wp-content/uploads/2020/05/Greek-Pizza_square.jpg",
  },
  {
    id: 15,
    name: "Meatball Madness",
    ingredients: [
      "Tomato Sauce",
      "Mozzarella",
      "Meatballs",
      "Parmesan",
      "Basil",
    ],
    price: 13.99,
    image:
      "https://www.cuisineandcocktails.com/wp-content/uploads/2019/03/10773156448_IMG_0841.jpg",
  },

  {
    id: 16,
    name: "Veggie Delight",
    ingredients: [
      "Tomato Sauce",
      "Mozzarella",
      "Bell Peppers",
      "Mushrooms",
      "Onions",
      "Olives",
    ],
    price: 11.99,
    image:
      "https://cdn.shopify.com/s/files/1/0173/8181/8422/files/20240625161049-recipeimage7_pizzagriddle_veggievegandelight.jpg?v=1719331851&width=600&height=900",
  },

  {
    id: 20,
    name: "Supreme",
    ingredients: [
      "Tomato Sauce",
      "Mozzarella",
      "Pepperoni",
      "Sausage",
      "Bell Peppers",
      "Onions",
      "Olives",
    ],
    price: 14.99,
    image:
      "https://www.thespruceeats.com/thmb/lmDJraajDXMJ9izsIfzNt79GrSs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Pizzasupremehoriz-1ccfa0b1732b4c128427d19ae02a422b.jpg",
  },
];



export default PIZZAS;
