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
  private slidesUrlES = "http://127.0.0.1:9200/slides/_search";
  private header = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http ) { }

// using mock data
  // getSlides(): Promise<Slide[]> {
  //   return Promise.resolve(SLIDES);
  // }

  // using real http service
  // getSlides() {
  //   return this.http.get(this.slideUrl)
  //              .toPromise()
  //              .then(response => response.json().data as Slide[])
  //              .catch(this.handleError);
  // }

  getSlides() {
    let slides = this.http.get(this.slidesUrlES, {headers: this.getHeaders()})
                          .map(this.convertSlideData);
    return slides;
  }

  convertSlideData(response: Response): Slide[] {
    // console.log(response.json())
    return response.json().hits.hits.map(toSlide);
  }

  getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

function toSlide(d) {
    let slide = <Slide>({
      title: d._source.title,
      description: d._source.description,
      pic: d._source.pic,
      date: d._source.date,
      credit: d._source.credit
    })
    return slide;
}