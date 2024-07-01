import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListData } from '../../../models/list-data.interface';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {
  @Input() data!: ListData;
}