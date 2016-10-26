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
  slides: Slide[];
  id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private slidesservice: SlidesService
  ) { }

  ngOnInit() {
    // this.getSlide();
    this.route.params.subscribe( params => {
      this.id = +params['id'] || -1 
    });
    this.getSlides(this.id);
  }

  getSlide() {
    this.route.params.forEach( (params) => {
      this.slidesservice.getSlide(params['id'])
                        .then( d => this.assignSlide(d) );
    });
  }

  getSlides(pathId) {
    this.slidesservice.getSlides()
                      .subscribe(
                        p => {
                          this.slides = p;
                          if (pathId == -1) {
                            this.assignSlide( p[0] );
                          } else {
                            this.assignSlide( this.slides.find( obj => obj.id == pathId) ); 
                          }
                        },
                        e => console.log('error', e)
                      );
  }

  assignSlide(d) {
    this.slide = d;
  }

}
