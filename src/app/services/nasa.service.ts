import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class NasaService {

    constructor(private _http:Http) {}

    getAPOD() {
        return this._http.get('https://api.nasa.gov/planetary/apod?api_key=TxpAbzBJkgazWhEkL2WIyZW2rsnEFx2Ns7Wmrey0')
          .map(response => response.json())
            .catch(error => Observable.throw(error.json() || 'Server Error'));
    }
  getMars(){
    return this._http.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=' + this.getYesterdaysDate() + '&api_key=TxpAbzBJkgazWhEkL2WIyZW2rsnEFx2Ns7Wmrey0')
      .map(response => response.json())
      .map(data => {
        var photos = [];
        photos.push(data.photos);
      return photos[0];})
      .catch(error => Observable.throw(error.json() || 'Server Error'));
  }

  getYesterdaysDate() {
    var date = new Date();
    date.setDate(date.getDate() - 1);
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  }
}
