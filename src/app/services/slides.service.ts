// this is default for service
import { Injectable } from '@angular/core';

// these required for http request and Promises
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// my model
import { Slide } from '../models/slide';
import { SLIDES } from '../mock-slides';

@Injectable()
export class SlidesService {

  private slideUrl = "app/slides";
  private header = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http ) { }

// using mock data
  // getSlides(): Promise<Slide[]> {
  //   return Promise.resolve(SLIDES);
  // }

  // using real http service
  getSlides() {
    return this.http.get(this.slideUrl)
               .toPromise()
               .then(response => response.json().data as Slide[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
