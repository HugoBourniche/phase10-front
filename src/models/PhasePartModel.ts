import { CardModel } from './CardModel';

export class PhasePartModel {
  private _cards: CardModel[];
  private _phaseType: string;

  constructor(cards: CardModel[], phaseType: string) {
    this._cards = cards;
    this._phaseType = phaseType;
  }

  get cards(): CardModel[] {
    return this._cards;
  }

  set cards(value: CardModel[]) {
    this._cards = value;
  }

  get phaseType(): string {
    return this._phaseType;
  }

  set phaseType(value: string) {
    this._phaseType = value;
  }
}
