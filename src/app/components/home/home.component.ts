import { Component } from '@angular/core';
import { myLists } from '../../mock-data/my-lists.data';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ListItemComponent } from '../../shared/components/list-item/list-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ListItemComponent,
    IconFieldModule,
    InputIconModule,
    ScrollPanelModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  allLists = myLists;
}
