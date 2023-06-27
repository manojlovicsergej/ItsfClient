import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KompanijaRoutingModule } from './kompanija-routing.module';
import { KompanijaComponent } from './components/kompanija/kompanija.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, KompanijaRoutingModule],
  providers: [],
  bootstrap: [KompanijaComponent],
})
export class KompanijaModule {}
