import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from "@angular/common";
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-flights-table',
  templateUrl: './flights-table.component.html',
  styleUrls: ['./flights-table.component.scss']
})
export class FlightsTableComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      flightNumber: {
        title: 'Flight',
        type: 'string',
      },
      date: {
        title: 'Date',
        type: 'string',
        valuePrepareFunction: (date) => {
          console.log(date)
          date = new Date(date.seconds * 1000);
          return new DatePipe('en-US').transform(date, 'yyyy-MM-dd');
        }
      },
      numberOfBookings: {
        title: 'Bookings',
        type: 'number',
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();

  @Input() set flights(flights) {
    this.source.load(flights);
  }

  @Output() selectFlight = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
    
  }

  onRowSelect(selectedRow: any) {
    this.selectFlight.next(selectedRow.data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  
}
