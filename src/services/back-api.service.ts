import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FETCH_PHASES_URL } from '../utils/constants';
import { Observable } from 'rxjs';
import { PhasesResponse } from '../models/api-responses/phasesResponse';

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

  public fetchPhases(
    numberPhases: number,
    seed: string | null,
  ): Observable<PhasesResponse> {
    const params = { numberPhases: numberPhases };
    if (seed !== null) {
      // @ts-ignore // seed is not null
      params['seed'] = seed;
    }
    return this.httpClient.get<PhasesResponse>(FETCH_PHASES_URL, {
      params: params,
    });
  }
}
