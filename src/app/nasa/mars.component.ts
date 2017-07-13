import {Component, OnInit} from '@angular/core';
import {NasaService} from '../services/nasa.service';
import {ErrorService} from "../services/error.service";

@Component({
  selector: 'mars-component',
  template: `
<section class="col-md-8 col-md-offset-2">

<h3 class="text-center">Yesterday on Mars</h3>
<div style="color: midnightblue;margin:20px;" *ngFor="let photo of mars">
{{photo.earth_date}}<br/>
{{photo.camera.name}}<br/>
<img class="img-responsive img-thumbnail" src="{{photo.img_src}}">
</div>
</section>
`,
})

export class MarsComponent implements OnInit {
  mars: any;
  constructor(private _nasaService: NasaService, private _errorService: ErrorService){

  }
  ngOnInit(){
    this.getMars();
  }

  getMars(){
    this._nasaService.getMars()
      .subscribe(data => {this.mars = data;},
        error => {this._errorService.handleError(error);})
  }





}
