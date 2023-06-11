import { NgModule } from '@angular/core';

import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public-routing.module';
import { DashboardComponent } from './modules/dashboard/components/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [DashboardComponent, PublicComponent, LayoutComponent],
  imports: [CommonModule, PublicRoutingModule],
  providers: [],
  bootstrap: [PublicComponent],
})
export class PublicModule {}
