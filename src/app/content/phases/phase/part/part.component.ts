import { Component, Input, OnInit } from '@angular/core';
import { PhasePartModel } from '../../../../../models/PhasePartModel';

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.less'],
})
export class PartComponent implements OnInit {
  @Input() part: PhasePartModel;

  constructor() {
    this.part = new PhasePartModel([], '');
  }

  ngOnInit(): void {}
}
