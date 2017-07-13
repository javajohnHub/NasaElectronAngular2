import { EventEmitter } from "@angular/core";

import { Error } from "../models/error";

export class ErrorService {
    errorOccurred = new EventEmitter<Error>();

    handleError(error: any) {
      if(error.errors){
        const errorData = new Error('Errors', error.errors);
        console.log('1 ' + errorData);
        this.errorOccurred.emit(errorData);

      }
      if(error.title && error.errors.message){
        const errorData = new Error(error.title, error.errors.message);
        console.log('2 ' + errorData);
        this.errorOccurred.emit(errorData);
      }
      if(error.message && error.error){
        const errorData = new Error(error.message, error.error);
        console.log('3 ' + errorData);
        this.errorOccurred.emit(errorData);
      }
      if(error._body){
         var err = JSON.parse(error._body);
        const errorData = new Error('Errors', err.error || err.data);
        console.log('4 ' + errorData);
        if( errorData.message !== 'Game null not found.'){
          this.errorOccurred.emit(errorData);
        }

      }


    }
}
