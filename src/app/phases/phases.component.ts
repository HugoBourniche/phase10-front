import { Component, Input, OnInit } from '@angular/core';
import { BackApiService } from '../../services/back-api.service';

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

  public database: string = 'init';

  // *****************************************************************************************************************
  // CONSTRUCTOR
  // *****************************************************************************************************************

  constructor(private backend: BackApiService) {}

  // *****************************************************************************************************************
  // ANGULAR LIFE CYCLE
  // *****************************************************************************************************************

  ngOnInit(): void {
    console.log('ngOnInit');
    this.backend.fetchPhases(this.numberPhases).subscribe((phases) => {
      console.log(phases);
      this.database = phases as string;
    });
  }
}
