import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BackApiService } from '../../../services/back-api.service';
import { PhaseModel } from '../../../models/PhaseModel';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-phases',
  templateUrl: './phases.component.html',
  styleUrls: ['./phases.component.less'],
})
export class PhasesComponent implements OnInit, OnDestroy {
  // *****************************************************************************************************************
  // VARIABLES
  // *****************************************************************************************************************

  @Input() seed: string = '';
  @Input() numberPhases: number = 10;

  listPhases: PhaseModel[] = [];

  fetchPhases$: Subject<void> = new Subject<void>();
  destroy$: Subject<boolean> = new Subject<boolean>();

  // *****************************************************************************************************************
  // CONSTRUCTOR
  // *****************************************************************************************************************

  constructor(private backend: BackApiService) {}

  // *****************************************************************************************************************
  // ANGULAR LIFE CYCLE
  // *****************************************************************************************************************

  ngOnInit(): void {
    this.fetchPhases$
      .pipe(
        takeUntil(this.destroy$),
        switchMap(() => {
          let seed: string | null = this.seed;
          if (this.seed === '') {
            seed = null;
          }
          return this.backend.fetchPhases(this.numberPhases, seed);
        }),
      )
      .subscribe((response) => {
        this.listPhases = response.phases;
      });
    this.triggerFetchPhase();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  // *****************************************************************************************************************
  // PUBLIC METHODS
  // *****************************************************************************************************************

  public triggerFetchPhase() {
    this.fetchPhases$.next();
  }
}
