import { PhaseModel } from '../PhaseModel';

export class PhasesResponse {
  private _phases: PhaseModel[];

  constructor(phases: PhaseModel[]) {
    this._phases = phases;
  }

  get phases(): PhaseModel[] {
    return this._phases;
  }

  set phases(value: PhaseModel[]) {
    this._phases = value;
  }
}
