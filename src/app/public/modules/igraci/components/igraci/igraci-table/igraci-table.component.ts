import {Component, OnInit} from '@angular/core';
import {DialogService} from "primeng/dynamicdialog";
import {DodajIgracaDijalogComponent} from "../../ui/dodaj-igraca-dijalog/dodaj-igraca-dijalog.component";

@Component({
  selector: 'app-igraci-table',
  templateUrl: './igraci-table.component.html',
  styleUrls: ['./igraci-table.component.scss']
})
export class IgraciTableComponent implements OnInit{
  constructor(private _dialogService: DialogService) {
  }
  ngOnInit(): void {
  }

  dodajIgracaDialog(){
    const ref = this._dialogService.open(DodajIgracaDijalogComponent, {
      showHeader: false,
      width: '500px',
    });
  }
}
