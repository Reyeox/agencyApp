import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import {  NgxUiLoaderConfig, POSITION,  PB_DIRECTION} from "ngx-ui-loader";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Imports Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { AgenciesComponent } from './components/agencies/agencies.component';

import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from "@angular/forms";
import { FilterPipe } from "./pipes/filter.pipe";


const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsColor: "#014b8e",
  overlayColor: "#ffffff",
  bgsOpacity: 1,
  bgsPosition: POSITION.centerCenter,
  bgsSize: 120,
  logoSize: 256,
  // bgsType: SPINNER.rectangleBounce, // background spinner type
  // fgsType: SPINNER.chasingDots, // foreground spinner type
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 5, // progress bar thickness
  logoUrl: 'assets/bcp-logo (1).png',
  pbColor: "#014b8e",
};

@NgModule({
  declarations: [
    AppComponent,
    AgenciesComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatListModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
