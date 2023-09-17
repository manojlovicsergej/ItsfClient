import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../services/useful-things.service';

@Injectable({
  providedIn: 'root',
})
export class GameHttpService {
  private _baseUrl: string;

  constructor(protected _http: HttpClient) {
    this._baseUrl = BASE_URL;
  }
}
