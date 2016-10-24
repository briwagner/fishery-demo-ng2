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

  id: number;
  podcast: Podcast;
  podcasts: Podcast[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private podcastsservice: PodcastsService
  ) { }

  ngOnInit() {
    // check route if id is passed
    let par = this.route.params.subscribe( params => {
      this.id = +params['id'] || -1;
    });
    this.getPodcasts(this.id);
  }

  getPodcast() {
    this.route.params.forEach( (params) => {
      this.podcastsservice.getPodcast(params['id'])
                          .then( d => this.assignPodcast(d) );
    });
  }

  getPodcasts(id) {
    let podcasts = this.podcastsservice.getPodcasts()
                                        .subscribe(
                                          p => {
                                            this.podcasts = p;
                                            // if ID is passed, make it featured
                                            // else set featured to first in array for now 
                                            if (id > -1) {
                                              this.assignPodcast( p.find(obj => obj.id == id) );
                                            } else {
                                              this.assignPodcast(p[0]);
                                            }
                                          },
                                          e => console.log(e)
                                        );
  }

  assignPodcast(d) {
    this.podcast = d;
  }

}
