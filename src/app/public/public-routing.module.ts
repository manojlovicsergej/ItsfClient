import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { PublicComponent } from './public.component';
import { IgraciModule } from './modules/igraci/igraci.module';
import { RobaModule } from './modules/roba/roba.module';
import { MaloprodajaModule } from './modules/maloprodaja/maloprodaja.module';
import { KompanijaModule } from './modules/kompanija/kompanija.module';

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
      {
        path: 'igraci',
        loadChildren: () => IgraciModule,
        data: {
          breadcrumb: {
            label: 'Igrači',
            disable: true,
          },
        },
      },
      {
        path: 'maloprodaja',
        loadChildren: () => MaloprodajaModule,
        data: {
          breadcrumb: {
            label: 'Maloprodaja',
            disable: true,
          },
        },
      },
      {
        path: 'roba',
        loadChildren: () => RobaModule,
        data: {
          breadcrumb: {
            label: 'Roba',
            disable: true,
          },
        },
      },
      {
        path: 'kompanija',
        loadChildren: () => KompanijaModule,
        data: {
          breadcrumb: {
            label: 'Kompanija',
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
