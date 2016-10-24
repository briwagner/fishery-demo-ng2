import { Input, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { PodcastsService } from '../services/podcasts.service';
import { Podcast } from '../models/podcast';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.css']
})
export class PodcastComponent implements OnInit {

  podcast: Podcast;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private podcastsservice: PodcastsService
  ) { }

  ngOnInit() {
    this.getPodcast();
  }

  getPodcast() {
    this.route.params.forEach( (params) => {
      this.podcastsservice.getPodcast(params['id'])
                          .then( d => this.assignPodcast(d) );
    } )
  }

  getPodcasts() {

  }

  assignPodcast(d) {
    this.podcast = d;
  }

}
