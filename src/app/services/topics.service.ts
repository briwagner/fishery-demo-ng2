// this is default for service
import { Injectable } from '@angular/core';

// these required for http request and Promises
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// my model
import { Topic } from '../models/topic';
// import { ARTICLES } from '../mock-articles';

@Injectable()
export class TopicsService {

  private slideUrl = "app/topics";
  private header = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http ) { }

// using mock data
  // getArticles(): Promise<Article[]> {
  //   return Promise.resolve(ARTICLES);
  // }

  // using real http service
  getTopics() {
    return this.http.get(this.slideUrl)
               .toPromise()
               .then(response => response.json().data as Topic[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
