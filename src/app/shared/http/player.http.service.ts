import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_VERSIONED_URL } from 'src/app/shared/models/crud-operations';
import { PlayerTableDto } from '../models/player-table-dto';

@Injectable({
  providedIn: 'root',
})
export class PlayerHttpService {
  private _baseUrl: string;

  constructor(
    protected _http: HttpClient
  ) {
    this._baseUrl = `https://localhost:5001/itsf`;
  }

  getAllPlayers(): Observable<PlayerTableDto[]> {
    return this._http.get<PlayerTableDto[]>(`${this._baseUrl}/get-all-players`);
  }
}
