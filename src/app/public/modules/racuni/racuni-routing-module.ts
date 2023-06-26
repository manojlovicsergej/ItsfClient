import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RacuniComponent } from './components/racuni/racuni.component';

const routes: Routes = [
  {
    path: '',
    component: RacuniComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RacuniRoutingModule {}
