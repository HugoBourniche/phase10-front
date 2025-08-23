export class CardModel {
  private _color: string;
  private _number: string;

  constructor(color: string, number: string) {
    this._color = color;
    this._number = number;
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }

  get number(): string {
    return this._number;
  }

  set number(value: string) {
    this._number = value;
  }
}
