import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PhasesComponent } from './content/phases/phases.component';
import { BackApiService } from '../services/back-api.service';
import { HttpClientModule } from '@angular/common/http';
import { PhaseComponent } from './content/phases/phase/phase.component';
import { PartComponent } from './content/phases/phase/part/part.component';
import { CardComponent } from './content/phases/phase/part/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContentComponent,
    PhasesComponent,
    PhaseComponent,
    PartComponent,
    CardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
  providers: [BackApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
