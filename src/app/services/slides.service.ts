// this is default for service
import { Injectable } from '@angular/core';

// these required for http request and Promises
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// model
import { Slide } from '../models/slide';
// mock data
import { SLIDES } from '../mock-slides';

@Injectable()
export class SlidesService {

  private slide_collection = "app/slides";
  private slidesUrlES = "http://127.0.0.1:9200/slides/_search";
  private slideUrl = "http://127.0.0.1:9200/slides/slide";
  private header = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http ) { }

  getSlide(id) {
    let slide = this.http.get(this.slideUrl + "/" + id, {headers: this.getHeaders()})
                         .map(d => toSlide( d.json() ))
                         .toPromise();
    return slide;
  }

  getSlides() {
    let slides = this.http.get(this.slidesUrlES, {headers: this.getHeaders()})
                          .map(this.convertSlideData);
    return slides;
  }

  convertSlideData(response: Response): Slide[] {
    // console.log(response.json().data);
    if (response.json().data) {
      return response.json().data.hits.hits.map(toSlide);
    } else {
      return response.json().hits.hits.map(toSlide);
    }
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
      id: d._id || d._source.id,
      title: d._source.title,
      description: d._source.description,
      pic: d._source.pic,
      date: d._source.date,
      credit: d._source.credit
    })
    return slide;
}