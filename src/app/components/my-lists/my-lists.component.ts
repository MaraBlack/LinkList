import { Component } from '@angular/core';
import { myLists } from '../../mock-data/my-lists.data';
import { CommonModule } from '@angular/common';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ListItemComponent } from '../../shared/components/list-item/list-item.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-lists',
  standalone: true,
  imports: [
    CommonModule,
    ListItemComponent,
    IconFieldModule,
    InputIconModule,
    ScrollPanelModule,
  ],
  templateUrl: './my-lists.component.html',
  styleUrl: './my-lists.component.scss',
})
export class MyListsComponent {
  allLists = myLists;

  constructor(private router: Router) {}

  onAddListClick() {
    this.router.navigate(['myLists/addList']);
  }
}
