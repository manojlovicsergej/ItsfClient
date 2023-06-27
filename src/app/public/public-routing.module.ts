import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { PublicComponent } from './public.component';
import { RacuniModule } from './modules/racuni/racuni.module';
import { RobaModule } from './modules/roba/roba.module';
import { MaloprodajaModule } from './modules/maloprodaja/maloprodaja.module';
import { KompanijaModule } from './modules/kompanija/kompanija.module';
import { BankaModule } from './modules/banka/banka.module';
import { PodesavanjaModule } from './modules/podesavanja/podesavanja.module';
import { PublicModule } from './public.module';

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
        path: 'racuni',
        loadChildren: () => RacuniModule,
        data: {
          breadcrumb: {
            label: 'Računi',
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
      {
        path: 'banka',
        loadChildren: () => BankaModule,
        data: {
          breadcrumb: {
            label: 'Banka',
            disable: true,
          },
        },
      },
      {
        path: 'podesavanja',
        loadChildren: () => PodesavanjaModule,
        data: {
          breadcrumb: {
            label: 'Podešavanja',
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
