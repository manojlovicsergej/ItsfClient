import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KompanijaComponent } from './components/kompanija/kompanija.component';

const routes: Routes = [
  {
    path: '',
    component: KompanijaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KompanijaRoutingModule {}
