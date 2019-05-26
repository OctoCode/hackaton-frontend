import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightsOverviewComponent } from './flights-overview/flights-overview.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { FlightsComponent } from './flights.component';

const routes: Routes = [{
  path: '',
  component: FlightsComponent,
  children: [{
    path: '',
    pathMatch: 'full',
    component: FlightsOverviewComponent
  }, {
    path: ':id',
    component: FlightDetailsComponent
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightsRoutingModule { }

export const routedComponents = [
];
