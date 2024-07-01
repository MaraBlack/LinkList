import { ListItem } from "./list-data.interface";

export interface GroceryList {
  name: string;
  items: ListItem[];
  dateCreated: Date;
  isFav: boolean;
  notes?: string;
  totalItems: number;
  totalPrice?: number;
}