import { Component, Input, OnInit } from '@angular/core';
import { CardModel } from '../../../../../../models/CardModel';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
})
export class CardComponent implements OnInit {
  @Input() card: CardModel;

  constructor() {
    this.card = new CardModel('', '');
  }

  ngOnInit(): void {}
}
