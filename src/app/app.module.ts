import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {ErrorService} from "./services/error.service";
import {ErrorComponent} from "./errors/error.component"
import {NasaService} from "./services/nasa.service";
import {MarsComponent} from "./nasa/mars.component";
import {ApodComponent} from "./nasa/apod.component";
@NgModule({
  declarations: [
    AppComponent,
      MarsComponent,
      ErrorComponent,
      ApodComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    FormsModule
  ],
  entryComponents: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers: [ErrorService, NasaService]
})
export class AppModule { }
