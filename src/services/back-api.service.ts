import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FETCH_PHASES_URL } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class BackApiService {
  // *****************************************************************************************************************
  // CONSTRUCTOR
  // *****************************************************************************************************************

  constructor(private httpClient: HttpClient) {}

  // *****************************************************************************************************************
  // FETCH FROM PHASES BACKEND
  // *****************************************************************************************************************

  public fetchPhases(numberPhases: number) {
    return this.httpClient.get(FETCH_PHASES_URL, {
      params: { numberPhases: numberPhases },
    });
  }
}
