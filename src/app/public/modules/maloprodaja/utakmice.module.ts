import { NgModule } from '@angular/core';
import { UtakmiceRoutingModule } from './utakmice-routing.module';
import { UtakmiceComponent } from './components/utakmice/utakmice.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [UtakmiceComponent],
  imports: [UtakmiceRoutingModule, SharedModule],
  providers: [],
  bootstrap: [UtakmiceComponent],
})
export class UtakmiceModule {}
