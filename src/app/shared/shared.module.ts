import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { CenteredDialogComponent } from './components/dialogs/centered-dialog/centered-dialog.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FieldComponent } from './components/ui/field/field.component';
import { ChipsModule } from 'primeng/chips';
import { InputTextModule } from 'primeng/inputtext';
import { ChipModule } from 'primeng/chip';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    CenteredDialogComponent,
    FieldComponent
  ],
  imports: [
    CommonModule,
    ChipsModule,
    InputTextModule,
    ChipModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsModule,
    ButtonModule,
    CommonModule,
    ChipsModule,
    InputTextModule,
    ChipModule,
    CenteredDialogComponent,
    FieldComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers : [DialogService,MessageService]
})
export class SharedModule {}
