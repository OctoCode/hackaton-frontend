import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../flights.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent implements OnInit {

  public flight: any;
  public bookings: any[] = [];

  public rows = Array.from(Array(32).keys());
  public seatLetters = ['A', 'B', 'C', 'D', 'E', 'F'];
  public bookingsBySeat = {};

  private subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: FlightsService
  ) {
  }

  ngOnInit() {
    // Load flight
    let id = this.route.snapshot.params['id'];
    let sub = this.service.getFlightById(id).subscribe(flight => {
      this.flight = flight;
      // Generate fake bookings
      for(let i = 0; i < this.flight.numberOfBookings; i++) {
        let fakeBooking = {
          id: Math.round(Math.random() * 1000),
          seatId: this.getRandomSeat(),
          showProbability: Math.random()
        };
        this.bookings.push(fakeBooking);
        this.bookingsBySeat[fakeBooking.seatId] = fakeBooking;
      }
    });
    this.subscriptions.push(sub);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
    this.subscriptions.length = 0;
  }
  
  private getRandomSeat() {
    let row = Math.round(Math.random() * this.rows.length);
    let seat = this.seatLetters[Math.round(Math.random() * this.seatLetters.length)];
    return row + seat;
  }

}
