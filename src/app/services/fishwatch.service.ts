import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FishwatchService {

  private fw_url = "http://fishwatch.noaa.mobomo.net/profiles/search/";
  private gov_url = "http://www.fishwatch.gov/profiles/search/";

  constructor(private http: Http) { }

  makeRequest(query) {
    let req = this.http.get(this.fw_url + query.toLowerCase())
             .map(this.convertRequest);
    return req;
  }

  convertRequest(response:Response) {
    console.log(response);
  }

  getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

}
