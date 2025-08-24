import { Component, OnInit, ViewChild } from '@angular/core';
import { PhasesComponent } from './phases/phases.component';
import {
  LOCALSTORAGE_KEY_NUMBER_PHASES,
  LOCALSTORAGE_KEY_SEED,
  LOCALSTORAGE_KEY_SELECTED_MENU,
} from '../../utils/constants';

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

  ngOnInit(): void {
    const customSeed = localStorage.getItem(LOCALSTORAGE_KEY_SEED);
    if (customSeed) {
      this.customSeed = customSeed;
      this.validatedForm = true;
    }
    const customNumberPhases = localStorage.getItem(
      LOCALSTORAGE_KEY_NUMBER_PHASES,
    );
    if (customNumberPhases) {
      this.customNumberPhases = +customNumberPhases;
    }
    const selectedMenu = localStorage.getItem(LOCALSTORAGE_KEY_SELECTED_MENU);
    if (selectedMenu) {
      this.selectedMenu = +selectedMenu;
    }
  }

  // *****************************************************************************************************************
  // EVENT METHODS
  // *****************************************************************************************************************

  onValidateForm(): void {
    this.validatedForm = true;
    localStorage.setItem(LOCALSTORAGE_KEY_SEED, this.customSeed);
    localStorage.setItem(
      LOCALSTORAGE_KEY_NUMBER_PHASES,
      String(this.customNumberPhases),
    );
    this.customPhases.triggerFetchPhase();
  }
}
