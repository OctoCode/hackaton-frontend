import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightsService } from '../flights.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './flights-overview.component.html',
  styleUrls: ['./flights-overview.component.scss']
})
export class FlightsOverviewComponent implements OnInit {

  constructor(
    private router: Router,
    private service: FlightsService
  ) { }

  public flights: any[] = [];

  private subscriptions: Subscription[] = [];

  ngOnInit() {
    // Subscribe to flight updates
    let sub = this.service.getFlights().subscribe(flights => {
      this.flights = flights;
    });
    this.subscriptions.push(sub);
  }

  goToFlightDetails(flight) {
    this.router.navigate(["/pages/flights", flight.id]);
  }

  ngOnDestroy() {
    // Unsubscribe from all
    this.subscriptions.forEach(s => {
      s.unsubscribe();
    });
    this.subscriptions.length = 0;
  }

}
