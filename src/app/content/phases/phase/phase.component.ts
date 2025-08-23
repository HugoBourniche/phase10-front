import { Component, Input, OnInit } from '@angular/core';
import { PhaseModel } from '../../../../models/PhaseModel';

@Component({
  selector: 'app-phase',
  templateUrl: './phase.component.html',
  styleUrls: ['./phase.component.less'],
})
export class PhaseComponent implements OnInit {
  @Input() index: number;
  @Input() phase: PhaseModel;

  constructor() {
    this.index = -1;
    this.phase = new PhaseModel();
  }

  ngOnInit(): void {}
}
