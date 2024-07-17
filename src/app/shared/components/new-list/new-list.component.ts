import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-list',
  standalone: true,
  imports: [],
  templateUrl: './new-list.component.html',
  styleUrl: './new-list.component.scss',
})
export class NewListComponent {
  constructor(private router: Router) {}

  onBackClick() {
    this.router.navigate(['myLists']);
  }
}
