import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { environment } from '../../../environments/environment';

import { FlightsRoutingModule } from './flights-routing.module';
import { FlightsService } from './flights.service';
import { FlightsComponent } from './flights.component';
import { FlightsOverviewComponent } from './flights-overview/flights-overview.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { FlightsTableComponent } from './components/flights-table/flights-table.component';

@NgModule({
  declarations: [
    FlightsComponent,
    FlightsOverviewComponent,
    FlightDetailsComponent,
    FlightsTableComponent,
  ],
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    FlightsRoutingModule,
    ThemeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    FlightsService
  ]
})
export class FlightsModule { }
