// this is default for service
import { Injectable } from '@angular/core';

// these required for http request and Promises
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// my model
import { Article } from '../models/article';
import { ARTICLES } from '../mock-articles';

@Injectable()
export class SalmonService {

    private salmonURL = "https://www.nwfsc.noaa.gov/observersalmon/api/v1/data/observer/selection.json";
    private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http ) { }

// using ES
  getSalmon() {
    let salmonData = this.http.get(this.salmonURL, {headers: this.getHeaders()});
    salmonData.map(this.convertSalmonData);
    return salmonData;
  }

  getHeaders() {
    let headers = new Headers();
    // let headers = this.headers;
    headers.append('Accept', 'application/json');
    return headers;
  }

  convertSalmonData(response: Response) {
    console.log(response);
    return response.json();
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }
}