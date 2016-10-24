// this is default for service
import { Injectable } from '@angular/core';

// these required for http request and Promises
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// model
import { Podcast } from '../models/podcast';

@Injectable()
export class PodcastsService {

  private podcastsUrl = "http://127.0.0.1:9200/podcasts/_search";
  private podcastUrl  = "http://127.0.0.1:9200/podcasts/podcast";
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getPodcasts() {
    let podcasts = this.http.get(this.podcastsUrl, {headers: this.getHeaders()})
                       .map(this.convertPodcastData);
    return podcasts;
  }

  getPodcast(id) {
    let podcast = this.http.get(this.podcastUrl + "/" + id, {headers: this.getHeaders()})
                       .map(d => toPodcast( d.json() ))
                       .toPromise();
    return podcast;
  }

  getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  convertPodcastData(response: Response) {
    if (response.json().data) {
      return response.json().data.hits.hits.map(toPodcast);
    } else {
      return response.json().hits.hits.map(toPodcast);
    }
  }

}

function toPodcast(d) {
  let podcast = <Podcast>({
    id: d._id || d._source.id,
    title: d._source.title,
    subtitle: d._source.subtitle,
    date: d._source.date,
    file: d._source.file,
    pic: d._source.pic,
    caption: d._source.caption,
    body: d._source.body  
  });
  return podcast;
}
