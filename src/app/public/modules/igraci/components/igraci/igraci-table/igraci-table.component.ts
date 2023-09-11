import {Component, OnInit} from '@angular/core';
import {DialogService} from "primeng/dynamicdialog";
import {DodajIgracaDijalogComponent} from "../../ui/dodaj-igraca-dijalog/dodaj-igraca-dijalog.component";
import { PlayerHttpService } from 'src/app/shared/http/player.http.service';
import { Subscription } from 'rxjs';
import { PlayerDto } from 'src/app/shared/models/player-dto';

@Component({
  selector: 'app-igraci-table',
  templateUrl: './igraci-table.component.html',
  styleUrls: ['./igraci-table.component.scss']
})
export class IgraciTableComponent implements OnInit{
  /** Subs */
  _subs: Subscription;

  /** Props */
  players : PlayerDto[] = [];

  constructor(
    private _playerHttp: PlayerHttpService,
    private _dialogService : DialogService) 
  {
    this._subs = new Subscription();
  }

  ngOnInit(): void {
    this._load();
  }

  private _load() {
    this._subs.add(
      this._playerHttp.getAllPlayers().subscribe((res) => {
        this.players = res;
        console.log(this.players);
      })
    );
  }

  dodajIgracaDialog(){
    const ref = this._dialogService.open(DodajIgracaDijalogComponent, {
      showHeader: false,
      width: '600px',
      data : {
        title : 'Dodavanje novog igrača'
      }
    });

    ref.onClose.subscribe(()=>{
      this._load();
    })
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }
}
