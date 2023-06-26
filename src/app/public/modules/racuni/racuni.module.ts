import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RacuniComponent } from './components/racuni/racuni.component';
import { RacuniRoutingModule } from './racuni-routing-module';

@NgModule({
  declarations: [],
  imports: [CommonModule, RacuniRoutingModule],
  providers: [],
  bootstrap: [RacuniComponent],
})
export class RacuniModule {}