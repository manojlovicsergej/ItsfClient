import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlayerHttpService } from 'src/app/shared/http/player.http.service';

@Component({
  selector: 'app-igraci',
  templateUrl: './igraci.component.html',
  styleUrls: ['./igraci.component.scss'],
})
export class IgraciComponent implements OnInit, OnDestroy {
  /** Subs */
  _subs: Subscription;

  constructor(private _playerHttp: PlayerHttpService) {
    this._subs = new Subscription();
  }

  ngOnInit(): void {
    this._load();
  }

  private _load() {
    this._subs.add(
      this._playerHttp.getAllPlayers().subscribe((res) => {
        console.log(res);
      })
    );
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }
}
