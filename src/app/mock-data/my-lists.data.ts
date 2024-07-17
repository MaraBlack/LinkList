import { GroceryCategoryEnum } from '../models/grocery-categories.enum';
import { ListData } from '../models/list-data.interface';

export const myLists: ListData[] = [
  {
    id: '1234test',
    name: 'Weekend shoping list',
    color: 'yellow-300',
    items: [
      {
        name: 'Milk',
        category: GroceryCategoryEnum.DAIRY_AND_EGGS,
        quantity: '1',
        quantityType: 'pcs',
        isFav: true,
      },
      {
        name: 'Cheese',
        category: GroceryCategoryEnum.DAIRY_AND_EGGS,
        quantity: '200',
        quantityType: 'g',
        isFav: true,
      },
    ],
    dateCreated: 'Sun, 30 Jun 2024 13:58:25 GMT',
    lastDateAccessed: 'Sun, 30 Jun 2024 13:58:25 GMT',
    isFav: true,
  },
  {
    id: '5678test',
    name: 'Party for Amelia',
    color: 'blue-300',
    items: [
      {
        name: 'Chips',
        category: GroceryCategoryEnum.SNACKS,
        quantity: '3',
        quantityType: 'pcs',
        isFav: false,
      },
    ],
    dateCreated: 'Sun, 30 Jun 2024 13:58:25 GMT',
    lastDateAccessed: 'Sun, 30 Jun 2024 13:58:25 GMT',
    isFav: false,
  },
  {
    id: '9012test',
    name: 'Treats',
    items: [
      {
        name: 'Wine',
        category: GroceryCategoryEnum.BEVERAGES,
        quantity: '1',
        quantityType: 'pcs',
        isFav: false,
      },
      {
        name: 'Chocolate Bars',
        category: GroceryCategoryEnum.SNACKS,
        quantity: '4',
        quantityType: 'pcs',
        isFav: false,
      },
    ],
    dateCreated: 'Sun, 30 Jun 2024 13:58:25 GMT',
    lastDateAccessed: 'Sun, 30 Jun 2024 13:58:25 GMT',
    isFav: false,
  },
  {
    id: '2345test',
    name: 'Food for Pina',
    color: 'green-300',
    items: [
      {
        name: 'Cat Food',
        category: GroceryCategoryEnum.PET_CARE,
        quantity: '3',
        quantityType: 'pcs',
        isFav: false,
      },
      {
        name: 'Pet Shampoo',
        category: GroceryCategoryEnum.PET_CARE,
        quantity: '1',
        quantityType: 'pcs',
        isFav: false,
      },
    ],
    dateCreated: 'Sun, 30 Jun 2024 13:58:25 GMT',
    lastDateAccessed: 'Sun, 30 Jun 2024 13:58:25 GMT',
    isFav: false,
  },
  {
    id: '6789test',
    name: 'Food for Doggo',
    color: 'yellow-300',
    items: [
      {
        name: 'Cat Food',
        category: GroceryCategoryEnum.PET_CARE,
        quantity: '3',
        quantityType: 'pcs',
        isFav: false,
      },
      {
        name: 'Pet Shampoo',
        category: GroceryCategoryEnum.PET_CARE,
        quantity: '1',
        quantityType: 'pcs',
        isFav: false,
      },
    ],
    dateCreated: 'Sun, 30 Jun 2024 13:58:25 GMT',
    lastDateAccessed: 'Sun, 30 Jun 2024 13:58:25 GMT',
    isFav: false,
  },
  {
    id: '01234test',
    name: 'Food for Piggy',
    color: 'orange-300',
    items: [
      {
        name: 'Cat Food',
        category: GroceryCategoryEnum.PET_CARE,
        quantity: '3',
        quantityType: 'pcs',
        isFav: false,
      },
      {
        name: 'Pet Shampoo',
        category: GroceryCategoryEnum.PET_CARE,
        quantity: '1',
        quantityType: 'pcs',
        isFav: false,
      },
    ],
    dateCreated: 'Sun, 30 Jun 2024 13:58:25 GMT',
    lastDateAccessed: 'Sun, 30 Jun 2024 13:58:25 GMT',
    isFav: false,
  },
];
