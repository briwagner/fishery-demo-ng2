import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { PodcastsService } from '../services/podcasts.service';
import { Podcast } from '../models/podcast';

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.component.html',
  styleUrls: ['./multimedia.component.css']
})
export class MultimediaComponent implements OnInit {

  podcast: Podcast;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private podcastsservice: PodcastsService,
  ) { }

  ngOnInit():void {
    this.getLatestPodcast();
  }

  getLatestPodcast() {
    this.podcastsservice.getPodcasts()
                        .subscribe(
                          p => this.podcast = this.takeNewPodcast(p),
                          e => console.log(e),
                          // () => console.log('completed latest pod')
                        );
  }

  takeNewPodcast(d) {
    if (Array.isArray(d)) {
      return d[0];
    }
  }

}
