import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then(
        (mod) => mod.HomeComponent
      ),
    children: [
      {
        path: 'home/addList',
        loadComponent: () =>
          import('./shared/components/new-list/new-list.component').then(
            (mod) => mod.NewListComponent
          ),
      },
    ],
  },
  {
    path: 'search',
    loadComponent: () =>
      import('./components/search-page/search-page.component').then(
        (mod) => mod.SearchPageComponent
      ),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./components/profile-page/profile-page.component').then(
        (mod) => mod.ProfilePageComponent
      ),
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
