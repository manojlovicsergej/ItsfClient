import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankaRoutingModule } from './banka-routing.module';
import { BankaComponent } from './components/banka/banka.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, BankaRoutingModule],
  providers: [],
  bootstrap: [BankaComponent],
})
export class BankaModule {}
