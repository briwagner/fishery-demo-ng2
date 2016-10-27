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
    let parser = new DOMParser();
    let doc = parser.parseFromString(response.text(), "text/html" );
    let profiles = doc.querySelector(".seafood-profiles")

    if (profiles == null || profiles.children.length == 0) {
      return [];
    } else {
      let items = grabFishProfiles(profiles);
      return items;
    }
  }

  getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

}

class Link {
  link: string;
  pic: string;
  title: string;
  aliases: string;
}

function grabFishProfiles(dom) {
  let arr = [];
  let items = dom.children;
  for (var i = 0; i < items.length; i++) {
    let fish = new Link;
    fish.link = items[i].href;
    fish.pic = items[i].children[0].children[0].src;
    fish.title = items[i].children[1].innerHTML;
    fish.aliases = items[i].children[2].innerHTML;
    arr.push(fish);
  }
  return arr;
}