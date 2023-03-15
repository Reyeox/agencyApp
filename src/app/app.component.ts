import { Component, Output, EventEmitter } from '@angular/core';

import { NgxUiLoaderService } from 'ngx-ui-loader';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  constructor(private ngxLoader: NgxUiLoaderService){}


  searchVisible = false;

  toggleSearch() {
    this.searchVisible = !this.searchVisible;
  }

  onSearchVisibleChange(visible: boolean) {
    this.searchVisible = visible;
  }
  ngOnInit(){
    this.ngxLoader.start();

    setTimeout(() => {
      this.ngxLoader.stop();
    }, 200);
  }
}
