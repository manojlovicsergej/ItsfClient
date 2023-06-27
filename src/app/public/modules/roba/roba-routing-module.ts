import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RobaComponent } from './components/roba/roba.component';

const routes: Routes = [
  {
    path: '',
    component: RobaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RobaRoutingModule {}
