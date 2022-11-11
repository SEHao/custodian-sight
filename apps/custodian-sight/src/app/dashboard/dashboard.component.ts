import { Component } from '@angular/core';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'cs-dashboard',
  template: ` <h1>Dashboard</h1> `,
})
export class DashboardComponent {
  constructor(private service: DashboardService) {}
}
