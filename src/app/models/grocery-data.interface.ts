import { GroceryCategoryEnum } from "./grocery-categories.enum";

export interface GroceryItem {
  name: string;
  subcategory?: string[]
}

export interface GroceryData {
  category: GroceryCategoryEnum;
  items: GroceryItem[];
}
