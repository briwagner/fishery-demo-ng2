// this is default for service
import { Injectable } from '@angular/core';

// these required for http request and Promises
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// model
import { Article } from '../models/article';
// mock data
import { ARTICLES } from '../mock-articles';

@Injectable()
export class ArticlesService {

  private slideUrl = "app/articles";
  private articlesUrlES = "http://127.0.0.1:9200/articles/_search";
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http ) { }

// using ES
  getArticles() {
    let articles = this.http.get(this.articlesUrlES, {headers: this.getHeaders()})
                          .map(this.convertArticleData);
    return articles;
  }

  getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  convertArticleData(response: Response) {
    // console.log( response.json() );
    if (response.json().data) {
      return response.json().data.hits.hits.map(toArticle)
    } else {
      return response.json().hits.hits.map(toArticle);
    }
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }
}

function toArticle(d) {
  let article = <Article>({
    id: d._source.id,
    title: d._source.title,
    date: d._source.date,
    pic: d._source.pic,
    topic: d._source.topic,
    body: d._source.body
  })
  return article;
}