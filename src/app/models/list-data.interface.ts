import { GroceryCategoryEnum } from "./grocery-categories.enum";

export interface ListItem {
  name: string;
  description?: string;
  category: GroceryCategoryEnum;
  quantity: string;
  quantityType: string;
  isFav: boolean;
}

export interface ListData {
  id: string;
  name: string;
  color?: string;
  items: ListItem[];
  dateCreated: string;
  lastDateAccessed: string;
  isFav: boolean;
}