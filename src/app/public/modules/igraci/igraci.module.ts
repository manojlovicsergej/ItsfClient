import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgraciComponent } from './components/igraci/igraci.component';
import { IgraciRoutingModule } from './igraci-routing-module';
import { IgraciTableComponent } from './components/igraci/igraci-table/igraci-table.component';
import { DataViewModule } from 'primeng/dataview';
import {SharedModule} from "../../../shared/shared.module";
import { DodajIgracaDijalogComponent } from './components/ui/dodaj-igraca-dijalog/dodaj-igraca-dijalog.component';
@NgModule({
  declarations: [
    IgraciComponent,
    IgraciTableComponent,
    DodajIgracaDijalogComponent
  ],
  imports: [IgraciRoutingModule,DataViewModule, SharedModule],
  providers: [],
  bootstrap: [IgraciComponent],
})
export class IgraciModule {}
