import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  template: '<router-outlet></router-outlet>',
})
export class FlightsComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
    if (environment.firebase.apiKey == '<your-key>') {
      alert("Configure Firebase in environments/environment.ts \
        and environments/environment.prod.ts files");
    }
  }

}
