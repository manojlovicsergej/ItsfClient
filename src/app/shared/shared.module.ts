import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ButtonModule,
  ],
  exports: [
    ButtonModule,
    CommonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
