import { Component } from '@angular/core';

@Component({
  selector: 'cs-root',
  template: `
    <cs-layout>
      <div sidenav class="menu">
        <div class="menu-category">Overview</div>
        <div class="menu-items">
          <a routerLink="['dashboard']">Dashboard</a>
        </div>
      </div>
      <router-outlet></router-outlet>
    </cs-layout>
  `,
  styleUrls: ['app.component.scss'],
})
export class AppComponent {}
