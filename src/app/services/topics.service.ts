// this is default for service
import { Injectable } from '@angular/core';

// these required for http request and Promises
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// model
import { Topic } from '../models/topic';
// mock data
// import { ARTICLES } from '../mock-articles';

@Injectable()
export class TopicsService {

  private topicUrl = "app/topics";
  private topicsUrlES = "http://127.0.0.1:9200/topics/_search";
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http ) { }

  // using real http service
  getTopics() {
    let topics = this.http.get(this.topicsUrlES, {headers: this.getHeaders()})
                          .map(this.convertTopicData);
    return topics;
}

  convertTopicData(response: Response): Topic[] {
    // console.log( response.json())
    if (response.json().data) {
      return response.json().data.hits.hits.map(toTopic)
    } else {
      return response.json().hits.hits.map(toTopic);
    }
  }

  getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

  function toTopic(d:any): Topic {
    let topic = <Topic>({
      name: d._source.name
    })
    return topic;
  }