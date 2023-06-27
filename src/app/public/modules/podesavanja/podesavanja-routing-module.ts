import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PodesavanjaComponent } from './components/podesavanja/podesavanja.component';

const routes: Routes = [
  {
    path: '',
    component: PodesavanjaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PodesavanjaRoutingModule {}
