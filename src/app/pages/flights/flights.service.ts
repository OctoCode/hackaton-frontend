import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from "@angular/fire/firestore";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private firestore: AngularFirestore) {
  }

  public getFlightById(id: string): Observable<any> {
    return this.firestore
      .doc(`flights/${id}`)
      .valueChanges();
  }

  public getFlights(): Observable<any[]> {
    return this.firestore
      .collection('flights')
      .valueChanges();
  }

  public getFlightsByNumber(flightNumber: string): Observable<any[]> {
    return this.firestore
      .collection('flights', ref => ref.where('flightNumber', '==', flightNumber))
      .valueChanges();
  }

  public getFlightsByDate(date?: Date): Observable<any[]> {
    date = date || new Date();
    date.setHours(0, 0, 0, 0);
    return this.firestore
      .collection('flights', ref => ref.where('date', '==', date))
      .valueChanges();
  }

  public getBookingsByFlightId(id: string): Observable<any[]> {
    return this.firestore
      .collection('bookings', ref => ref.where('flightId', '==', id))
      .valueChanges();
  }

}