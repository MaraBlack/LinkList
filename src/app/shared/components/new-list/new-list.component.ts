import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListData } from '../../../models/list-data.interface';
import { CommonModule } from '@angular/common';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { GroceryCategoryEnum } from '../../../models/grocery-categories.enum';

@Component({
  selector: 'app-new-list',
  standalone: true,
  imports: [CommonModule, FormsModule, FloatLabelModule, InputTextModule],
  templateUrl: './new-list.component.html',
  styleUrl: './new-list.component.scss',
})
export class NewListComponent implements OnInit{
  newListData: ListData = {
    id: '',
    name: '',
    items: [],
    color: '',
    dateCreated: '',
    lastDateAccessed: '',
    isFav: false,
  };

  colors = [
    'gray-500',
    'green-500',
    'teal-500',
    'blue-500',
    'purple-500',
    'red-500',
    'orange-500',
    'yellow-500',
  ];

  categores!: string[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.categores = Object.values(GroceryCategoryEnum);
  }

  onBackClick() {
    this.router.navigate(['myLists']);
  }

  setColor(color: string){
    this.newListData.color = color;
  }
}
