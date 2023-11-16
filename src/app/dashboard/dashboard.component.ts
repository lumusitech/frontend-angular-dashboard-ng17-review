import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidemenuComponent } from '../shared/sidemenu/sidemenu.component';
import { routes } from '../app.routes';

@Component({
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidemenuComponent],
  templateUrl: './dashboard.component.html',
  styles: ``,
})
export default class DashboardComponent {
  public menuItems = routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((route) => route.path !== '**')
    .filter((route) => !route.path?.includes('user/:id'));

  constructor() {
    console.log(this.menuItems);
  }
}
