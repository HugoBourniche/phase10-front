import { Component, OnInit, ViewChild } from '@angular/core';
import { PhasesComponent } from './phases/phases.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less'],
})
export class ContentComponent implements OnInit {
  // *****************************************************************************************************************
  // VARIABLES
  // *****************************************************************************************************************

  selectedMenu: number = 0;

  customSeed: string = '';
  customNumberPhases: number = 10;
  validatedForm: boolean = false;

  @ViewChild('customPhases') customPhases!: PhasesComponent;

  // *****************************************************************************************************************
  // CONSTRUCTOR
  // *****************************************************************************************************************

  constructor() {}

  // *****************************************************************************************************************
  // ANGULAR LIFE CYCLE
  // *****************************************************************************************************************

  ngOnInit(): void {}

  // *****************************************************************************************************************
  // EVENT METHODS
  // *****************************************************************************************************************

  onValidateForm(): void {
    this.validatedForm = true;
    this.customPhases.triggerFetchPhase();
  }
}
