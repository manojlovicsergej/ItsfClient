import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankaComponent } from './components/banka/banka.component';

const routes: Routes = [
  {
    path: '',
    component: BankaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BankaRoutingModule {}
