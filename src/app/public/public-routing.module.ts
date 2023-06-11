import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => DashboardModule,
        data: {
          breadcrumb: {
            label: 'Dashboard',
            disable: true,
          },
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
