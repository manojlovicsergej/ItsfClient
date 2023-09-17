import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PlayerHttpService } from 'src/app/shared/http/player.http.service';
import { GameDto } from 'src/app/shared/models/game-dto';
import { PlayerDto } from 'src/app/shared/models/player-dto';
import { AlertService } from 'src/app/shared/services/alert.service';
import { asFormControl } from 'src/app/shared/services/useful-things.service';
import { UtakmicaFormService } from '../../services/utakmica-form.service';
import { Side } from 'src/app/shared/models/side-type';

@Component({
  selector: 'app-utakmice',
  templateUrl: './utakmice.component.html',
  styleUrls: ['./utakmice.component.scss'],
})
export class UtakmiceComponent implements OnInit, OnDestroy {
  /** Subscription */
  private _subs: Subscription;

  /** Props */
  form: FormGroup | null;
  model: GameDto | null;
  players: PlayerDto[] = [];
  tempPlayers: PlayerDto[] = [];
  hostPlayers: PlayerDto[] = [];
  guestPlayers: PlayerDto[] = [];

  constructor(
    private _alertService: AlertService,
    private _playerHttp: PlayerHttpService,
    private _fs: UtakmicaFormService
  ) {
    this._subs = new Subscription();
    this.model = null;
    this.form = null;
  }

  ngOnInit(): void {
    this._subs.add(
      this._fs.getForm.subscribe((res) => {
        this.form = res;
      })
    );
    this._load();
  }

  private _load() {
    this._subs.add(
      this._playerHttp.getAllPlayers().subscribe((res) => {
        this.players = res;
        this.tempPlayers = this.players;
      })
    );
  }

  izaberiIgraca(player: PlayerDto, side: Side) {
    if (side === Side.HOST) {
      if (this.hostPlayers.length < 2) {
        this.hostPlayers.push(player);
        this.izbaciIgracaIzBrzePretrage(player.id!);
      }
      return;
    }

    if (this.guestPlayers.length < 2) {
      this.guestPlayers.push(player);
      this.izbaciIgracaIzBrzePretrage(player.id!);
    }
  }

  izbaciIgraca(id: number, side: Side) {
    if (side === Side.HOST) {
      this.hostPlayers = this.hostPlayers.filter((player) => player.id !== id);
    } else {
      this.guestPlayers = this.guestPlayers.filter(
        (player) => player.id !== id
      );
    }
    const player = this.players.filter((player) => player.id === id).at(0);
    this.tempPlayers.push(player!);
  }

  izbaciIgracaIzBrzePretrage(id: number) {
    this.tempPlayers = this.tempPlayers.filter((player) => player.id !== id);
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

  protected readonly asFormControl = asFormControl;
}
