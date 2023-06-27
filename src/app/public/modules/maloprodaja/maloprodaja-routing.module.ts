import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaloprodajaComponent } from './components/maloprodaja/maloprodaja.component';

const routes: Routes = [
  {
    path: '',
    component: MaloprodajaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaloprodajaRoutingModule {}
