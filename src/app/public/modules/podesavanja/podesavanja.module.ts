import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PodesavanjaComponent } from './components/podesavanja/podesavanja.component';
import { PodesavanjaRoutingModule } from './podesavanja-routing-module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PodesavanjaRoutingModule],
  providers: [],
  bootstrap: [PodesavanjaComponent],
})
export class PodesavanjaModule {}
