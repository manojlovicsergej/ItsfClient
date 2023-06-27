import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaloprodajaRoutingModule } from './maloprodaja-routing.module';
import { MaloprodajaComponent } from './components/maloprodaja/maloprodaja.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaloprodajaRoutingModule],
  providers: [],
  bootstrap: [MaloprodajaComponent],
})
export class MaloprodajaModule {}
