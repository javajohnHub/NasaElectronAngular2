import {Component, OnInit } from '@angular/core';
import {NasaService} from '../services/nasa.service';
import {ErrorService} from "../services/error.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'apod-component',
  template: `
<section class="col-md-8 col-md-offset-2">

<h3 class="text-center">{{title}}</h3>
<small>{{date}}</small>
<small><span *ngIf="copyright">{{copyright}}</span><br/></small>
<div *ngIf="media_type == 'video'" class="video-container">
  <iframe  [src]="videoUrl"
   width="560" height="315" frameborder="0" allowfullscreen align="middle">
  </iframe><br/><br/>
  
</div>
<img class="img-responsive img-thumbnail" *ngIf="media_type == 'image'" src="{{hdurl}}" /><br/><br/>

<p style="font-size: larger;">{{explanation}}</p>

</section>
`,
  styles: [`
.video-container {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 35px;
    height: 0;
    overflow: hidden;
}
.video-container iframe {
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
}
`]

})

export class ApodComponent implements OnInit {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  title: string;
  url: string;
  videoUrl: any;

  constructor(private _nasaService: NasaService, private _errorService: ErrorService, private sanitizer: DomSanitizer){


  }
  ngOnInit(){
    this.getApod();
  }

  getApod(){
    this._nasaService.getAPOD()
      .subscribe(data => {
        this.copyright = data.copyright;
        this.date = data.date;
        this.explanation = data.explanation;
        this.hdurl = data.hdurl;
        this.media_type = data.media_type;
        this.title = data.title;
        this.url = data.url;
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
      },
        error => {this._errorService.handleError(error);})
  }



}
