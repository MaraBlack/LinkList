import { GroceryCategoryEnum } from "../models/grocery-categories.enum";
import { GroceryData } from "../models/grocery-data.interface";

export const data: GroceryData[] = [
  {
    category: GroceryCategoryEnum.FRUITS,
    items: [
      { name: 'Apples' },
      { name: 'Bananas' },
      { name: 'Grapes' },
      { name: 'Oranges' },
      { name: 'Strawberries' },
      { name: 'Blueberries' },
      { name: 'Raspberries' },
      { name: 'Blackberries' },
      { name: 'Pineapple' },
      { name: 'Watermelon' },
      { name: 'Cantaloupe' },
      { name: 'Honeydew Melon' },
      { name: 'Mangoes' },
      { name: 'Kiwi' },
      { name: 'Peaches' },
      { name: 'Plums' },
      { name: 'Pears' },
      { name: 'Cherries' },
      { name: 'Avocados' }
    ]
  },
  {
    category: GroceryCategoryEnum.VEGETABLES,
    items: [
      { name: 'Potatoes' },
      { name: 'Onions', subcategory: ['white', 'red'] },
      { name: 'Carrots' },
      { name: 'Celery' },
      { name: 'Lettuce' },
      { name: 'Cabbage' },
      { name: 'Broccoli' },
      { name: 'Cauliflower' },
      { name: 'Bell Peppers' },
      { name: 'Tomatoes' },
      { name: 'Cucumbers' },
      { name: 'Zucchini' },
      { name: 'Squash' },
      { name: 'Green Beans' },
      { name: 'Asparagus' },
      { name: 'Mushrooms', subcategory: ['champinion', 'whetever'] },
      { name: 'Spinach' },
      { name: 'Kale' }
    ]
  },
  {
    category: GroceryCategoryEnum.CANNED_GOODS,
    items: [
      { name: 'Soup' },
      { name: 'Tuna' },
      { name: 'Salmon' },
      { name: 'Sardines' },
      { name: 'Beans' },
      { name: 'Corn' },
      { name: 'Peas' },
      { name: 'Tomato Sauce' },
      { name: 'Tomato Paste' },
      { name: 'Diced Tomatoes' },
      { name: 'Pasta Sauce' },
      { name: 'Pickles' },
      { name: 'Olives' },
      { name: 'Coconut Milk' },
      { name: 'Condensed Milk' },
      { name: 'Evaporated Milk' }
    ]
  },
  {
    category: GroceryCategoryEnum.DAIRY_AND_EGGS,
    items: [
      { name: 'Milk' },
      { name: 'Eggs' },
      { name: 'Butter' },
      { name: 'Yogurt' },
      { name: 'Cheese' },
      { name: 'Cottage Cheese' },
      { name: 'Sour Cream' },
      { name: 'Cream Cheese' }
    ]
  },
  {
    category: GroceryCategoryEnum.BREAD_AND_BAKERY,
    items: [
      { name: 'Bread', subcategory: ['white', 'brown', 'with seeds'] },
      { name: 'Bagels' },
      { name: 'Rolls' },
      { name: 'Croissants' },
      { name: 'Tortillas' },
      { name: 'Muffins' },
      { name: 'Pastries' },
      { name: 'Cookies' },
      { name: 'Cakes' },
      { name: 'Pies' }
    ]
  },
  {
    category: GroceryCategoryEnum.MEAT_AND_SEAFOOD,
    items: [
      { name: 'Beef' },
      { name: 'Chicken' },
      { name: 'Pork' },
      { name: 'Lamb' },
      { name: 'Fish' },
      { name: 'Shrimp' },
      { name: 'Shellfish' },
      { name: 'Bacon' },
      { name: 'Sausages' },
      { name: 'Deli Meats' }
    ]
  },
  {
    category: GroceryCategoryEnum.FROZEN_FOODS,
    items: [
      { name: 'Frozen Vegetables' },
      { name: 'Frozen Fruits' },
      { name: 'Frozen Dinners' },
      { name: 'Frozen Pizzas' },
      { name: 'Ice Cream' },
      { name: 'Frozen Desserts' },
      { name: 'Frozen Seafood' },
      { name: 'Frozen Appetizers' }
    ]
  },
  {
    category: GroceryCategoryEnum.PANTRY_STAPLES,
    items: [
      { name: 'Rice' },
      { name: 'Pasta' },
      { name: 'Quinoa' },
      { name: 'Lentils' },
      { name: 'Oats' },
      { name: 'Flour' },
      { name: 'Sugar' },
      { name: 'Salt' },
      { name: 'Pepper' },
      { name: 'Cooking Oil' },
      { name: 'Vinegar' },
      { name: 'Honey' },
      { name: 'Maple Syrup' },
      { name: 'Cereal' },
      { name: 'Granola' },
      { name: 'Nut Butters' },
      { name: 'Jam and Preserves' }
    ]
  },
  {
    category: GroceryCategoryEnum.SNACKS,
    items: [
      { name: 'Chips' },
      { name: 'Pretzels' },
      { name: 'Crackers' },
      { name: 'Popcorn' },
      { name: 'Nuts' },
      { name: 'Trail Mix' },
      { name: 'Rice Cakes' },
      { name: 'Granola Bars' },
      { name: 'Cookies' },
      { name: 'Chocolate Bars' },
      { name: 'Candy' }
    ]
  },
  {
    category: GroceryCategoryEnum.BEVERAGES,
    items: [
      { name: 'Coffee', subcategory: ['classic', 'decaf'] },
      { name: 'Tea' },
      { name: 'Juice' },
      { name: 'Soda' },
      { name: 'Sports Drinks' },
      { name: 'Energy Drinks' },
      { name: 'Bottled Water' },
      { name: 'Beer' },
      { name: 'Wine' },
      { name: 'Liquor' }
    ]
  },
  {
    category: GroceryCategoryEnum.CONDIMENTS_AND_SAUCES,
    items: [
      { name: 'Ketchup' },
      { name: 'Mustard' },
      { name: 'Mayonnaise' },
      { name: 'BBQ Sauce' },
      { name: 'Hot Sauce' },
      { name: 'Soy Sauce' },
      { name: 'Teriyaki Sauce' },
      { name: 'Worcestershire Sauce' },
      { name: 'Salsa' },
      { name: 'Salad Dressings' },
      { name: 'Marinades' }
    ]
  },
  {
    category: GroceryCategoryEnum.HOUSEHOLD_AND_CLEANING,
    items: [
      { name: 'Paper Towels' },
      { name: 'Toilet Paper' },
      { name: 'Tissues' },
      { name: 'Cleaning Supplies' },
      { name: 'Trash Bags' },
      { name: 'Aluminum Foil' },
      { name: 'Plastic Wrap' },
      { name: 'Ziploc Bags' },
      { name: 'Batteries' }
    ]
  },
  {
    category: GroceryCategoryEnum.PERSONAL_CARE,
    items: [
      { name: 'Shampoo' },
      { name: 'Conditioner' },
      { name: 'Body Wash' },
      { name: 'Soap' },
      { name: 'Face Cleanser' },
      { name: 'Facial Moisturizer' },
      { name: 'Body Lotion' },
      { name: 'Deodorant' },
      { name: 'Toothpaste' },
      { name: 'Toothbrushes' },
      { name: 'Dental Floss' },
      { name: 'Mouthwash' },
      { name: 'Razors' },
      { name: 'Shaving Cream or Gel' },
      { name: 'Feminine Hygiene Products' },
      { name: 'Hair Styling Products' },
      { name: 'Hand Sanitizer' },
      { name: 'Sunscreen' },
      { name: 'Lip Balm' }
    ]
  },
  {
    category: GroceryCategoryEnum.BABY_ITEMS,
    items: [
      { name: 'Diapers' },
      { name: 'Baby Wipes' },
      { name: 'Baby Formula' },
      { name: 'Baby Food' },
      { name: 'Baby Cereal' },
      { name: 'Baby Bottles' },
      { name: 'Pacifiers' },
      { name: 'Baby Shampoo and Wash' },
      { name: 'Baby Lotion' },
      { name: 'Baby Powder' },
      { name: 'Diaper Rash Cream' },
      { name: 'Baby Toys' },
      { name: 'Baby Utensils and Feeding Accessories' },
      { name: 'Baby Safety Products' }
    ]
  },
  {
    category: GroceryCategoryEnum.PET_CARE,
    items: [
      { name: 'Dog Food' },
      { name: 'Cat Food' },
      { name: 'Dog Treats' },
      { name: 'Cat Treats' },
      { name: 'Dog Toys' },
      { name: 'Cat Toys' },
      { name: 'Pet Beds' },
      { name: 'Pet Grooming Supplies' },
      { name: 'Pet Shampoo' },
      { name: 'Pet Dental Care Products' },
      { name: 'Pet Medications' },
      { name: 'Litter' },
      { name: 'Pet Bowls and Feeders' },
      { name: 'Pet Carriers and Crates' },
      { name: 'Pet Clothing and Accessories' }
    ]
  }
];