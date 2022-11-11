import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutComponent } from './components/layout.component';

@NgModule({
  imports: [CommonModule],
  exports: [LayoutComponent],
  declarations: [LayoutComponent],
})
export class CoreModule {}
