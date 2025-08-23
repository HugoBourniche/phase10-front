import { PhasePartModel } from './PhasePartModel';

export class PhaseModel {
  private _parts: PhasePartModel[];

  constructor(parts?: PhasePartModel[]) {
    this._parts = parts || [];
  }

  get parts(): PhasePartModel[] {
    return this._parts;
  }

  set parts(value: PhasePartModel[]) {
    this._parts = value;
  }
}
