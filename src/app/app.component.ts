import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './components/home/home.component';
import { PrimeNGConfig } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [],
  imports: [
    CommonModule,
    BadgeModule,
    RouterOutlet,
    HomeComponent,
    ButtonModule,
    MenuModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'LinkList';
  isCurrentThemeLight = true;
  navItems!: {
    label: string;
    items: { label: string; icon: string; route: string; isActive: boolean }[];
  }[];

  constructor(
    private themeService: ThemeService,
    private router: Router,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.navItems = [
      {
        label: 'Navigate',
        items: [
          {
            label: 'Home',
            icon: 'pi pi-home',
            route: '/home',
            isActive: true,
          },
          {
            label: 'Search',
            icon: 'pi pi-search',
            route: '/search',
            isActive: false,
          },
          {
            label: 'Profile',
            icon: 'pi pi-user',
            route: '/profile',
            isActive: false,
          },
        ],
      },
    ];
  }

  onThemeChange(): void {
    this.themeService.switchTheme();
    this.isCurrentThemeLight = this.themeService.getCurrentTheme() === 'light-theme';

  }

  onItemClick(item: any) {
    const navIndex = this.navItems?.findIndex((x) => x.label === 'Navigate');

    if (navIndex !== -1) {
      this.navItems[navIndex].items.forEach((element: any) => {
        element.isActive = false;
      });

      item.isActive = true;
      this.router.navigate([item.route]);
    }

  }
}
