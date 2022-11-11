import { Component } from '@angular/core';

@Component({
  selector: 'cs-layout',
  template: `
    <div>
      <div class="sidenav">
        <ng-content select="[sidenav]"></ng-content>
      </div>
      <div class="content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {}
