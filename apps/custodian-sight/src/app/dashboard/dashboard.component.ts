import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'cs-dashboard',
  template: `
    <h1>Dashboard</h1>
  `,
})
export class DashboardComponent implements OnInit {
  constructor(private service: DashboardService) {}

  ngOnInit(): void {
      this.service.getApiMessage().pipe(take(1)).subscribe((res) => console.log(res))
  }
}
