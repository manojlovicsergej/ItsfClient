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
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { RatingModule } from 'primeng/rating';
import { RatingComponent } from './components/ui/rating/rating.component';

@NgModule({
  declarations: [
    CenteredDialogComponent,
    FieldComponent,
    RatingComponent,
  ],
  imports: [
    CommonModule,
    ChipsModule,
    InputTextModule,
    ChipModule,
    ButtonModule,
    ReactiveFormsModule,
    DropdownModule,
    CalendarModule,
    RatingModule
  ],
  exports: [
    ReactiveFormsModule,
    ButtonModule,
    DropdownModule,
    CommonModule,
    CalendarModule,
    ChipsModule,
    RatingModule,
    InputTextModule,
    ChipModule,
    CenteredDialogComponent,
    FieldComponent,
    RatingComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers : [DialogService,MessageService]
})
export class SharedModule {}
