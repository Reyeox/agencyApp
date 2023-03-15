import { Component, OnInit, EventEmitter, Output } from '@angular/core';


export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css']
})
export class AgenciesComponent implements OnInit {
  
  searchVisible = false;
  constructor() { }

  @Output() searchVisibleChange = new EventEmitter<boolean>();

  toggleSearch() {
    this.searchVisible = !this.searchVisible;
    this.searchVisibleChange.emit(this.searchVisible);
  }
  value: string = '';

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];

  ngOnInit(): void {
  }

}