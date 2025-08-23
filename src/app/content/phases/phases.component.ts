import { Component, Input, OnInit } from '@angular/core';
import { BackApiService } from '../../../services/back-api.service';
import { PhaseModel } from '../../../models/PhaseModel';

@Component({
  selector: 'app-phases',
  templateUrl: './phases.component.html',
  styleUrls: ['./phases.component.less'],
})
export class PhasesComponent implements OnInit {
  // *****************************************************************************************************************
  // VARIABLES
  // *****************************************************************************************************************

  @Input() title: string = '';
  @Input() numberPhases: number = 10;

  listPhases: PhaseModel[] = [];

  // *****************************************************************************************************************
  // CONSTRUCTOR
  // *****************************************************************************************************************

  constructor(private backend: BackApiService) {}

  // *****************************************************************************************************************
  // ANGULAR LIFE CYCLE
  // *****************************************************************************************************************

  ngOnInit(): void {
    this.backend.fetchPhases(this.numberPhases).subscribe((response) => {
      console.log(response);
      this.listPhases = response.phases;
      // this.database = phases;
    });
  }
}
