import {Component, OnDestroy, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {Subscription} from "rxjs";
import {PlayerDto} from "../../../../../../shared/models/player-dto";
import {IgracFormService} from "../../../services/igrac-form.service";
import {FormHelperService} from "../../../../../../shared/services/form-helper.service";
import {AlertService} from "../../../../../../shared/services/alert.service";
import {FormGroup} from "@angular/forms";
import {asFormControl} from "../../../../../../shared/services/useful-things.service";
import {PlayerHttpService} from "../../../../../../shared/http/player.http.service";

@Component({
  selector: 'app-dodaj-igraca-dijalog',
  templateUrl: './dodaj-igraca-dijalog.component.html',
  styleUrls: ['./dodaj-igraca-dijalog.component.scss']
})
export class DodajIgracaDijalogComponent implements OnInit, OnDestroy {
  // Subs
  private _subs: Subscription;

  // props
  dialogTitle: string = '';
  form: FormGroup| null;
  model: PlayerDto | null;

  constructor(
    private _dialogRef: DynamicDialogRef,
    private _dialogConfig: DynamicDialogConfig,
    private _fs: IgracFormService,
    private _formHelper: FormHelperService,
    private _alertService : AlertService,
    private _client : PlayerHttpService)
  {
    this._subs = new Subscription();
    this.model = null;
    this.form = null;
  }

  ngOnInit(): void {
    this.dialogTitle = this._dialogConfig.data.title;

    this._subs.add(
      this._fs.getForm.subscribe((res) => {
        this.form = res;
      })
    );
  }

  handleSave() {
    if (this.form === null || !this.form.valid) {
      this._formHelper.invalidateForm(this.form!);
      // this._alertService.addWarnMsg(
      //   'Morate popuniti obavezna polja (označena crvenom bojom)!'
      // );
      //this._dialogRef.close();
      return;
    }
    console.log(this.form.value);
    this._subs.add(
      this._client.addPlayer(this.form.value as PlayerDto).subscribe((res)=>{
        console.log(res);
        this._alertService.addWarnMsg(
          'Morate popuniti obavezna polja (označena crvenom bojom)!'
        );
        this._dialogRef.close();
      })
    )
  }

  handleCancel() {
    this._dialogRef.close();
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

  protected readonly asFormControl = asFormControl;
}
