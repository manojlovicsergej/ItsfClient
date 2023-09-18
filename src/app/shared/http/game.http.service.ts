import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../services/useful-things.service';
import { GameDto } from '../models/game-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameHttpService {
  private _baseUrl: string;

  constructor(protected _http: HttpClient) {
    this._baseUrl = BASE_URL;
  }

  addGame(request: GameDto): Observable<string> {
    return this._http.post(`${this._baseUrl}/add-game`, request, {
      responseType: 'text',
    });
  }

  getAllGames(): Observable<GameDto[]> {
    return this._http.get<GameDto[]>(`${this._baseUrl}/get-all-games`);
  }

  getCurrentGames(): Observable<GameDto[]> {
    return this._http.get<GameDto[]>(`${this._baseUrl}/get-current-games`);
  }

  deletePlayer(gameId: number): Observable<string> {
    return this._http.delete<string>(
      `${this._baseUrl}/delete-game?gameId=${gameId}`
    );
  }
}
