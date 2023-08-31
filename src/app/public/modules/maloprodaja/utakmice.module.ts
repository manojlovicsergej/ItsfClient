import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtakmiceRoutingModule } from './utakmice-routing.module';
import { UtakmiceComponent } from './components/utakmice/utakmice.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, UtakmiceRoutingModule],
  providers: [],
  bootstrap: [UtakmiceComponent],
})
export class UtakmiceModule {}
