import { Input, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { SlidesService } from '../services/slides.service';
import { Slide } from '../models/slide';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  slide: Slide;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private slidesservice: SlidesService
  ) { }

  ngOnInit() {
    this.getSlide();
  }

  getSlide() {
    this.route.params.forEach( (params) => {
      this.slidesservice.getSlide(params['id'])
                        .then( d => this.assignSlide(d) );
    });
  }

  getSlides() {

  }

  assignSlide(d) {
    this.slide = d;
  }

}
