import { NgModule } from '@angular/core';

import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public-routing.module';
import { DashboardComponent } from './modules/dashboard/components/dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { RacuniComponent } from './modules/racuni/components/racuni/racuni.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DashboardComponent, PublicComponent, LayoutComponent, RacuniComponent],
  imports: [PublicRoutingModule, CommonModule],
  providers: [],
  bootstrap: [PublicComponent],
})
export class PublicModule {}
