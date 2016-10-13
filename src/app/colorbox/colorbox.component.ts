import { Component, OnInit } from '@angular/core';

import { SlidesService } from '../services/slides.service';
import { Slide } from '../models/slide';

@Component({
  selector: 'app-colorbox',
  templateUrl: './colorbox.component.html',
  styleUrls: ['./colorbox.component.css']
})
export class ColorboxComponent implements OnInit {

  constructor(private slidesService: SlidesService) { }

  // slides = SLIDES;
  slides: Slide[];
  selectedSlide;

  ngOnInit(): void {
    // var httpcall = this.slidesService
    //                    .getSlides()
    //                    .subscribe(
    //                      p => console.log(p),
    //                      e => console.log(e),
    //                      () => console.log('completed')
    //                    );
    // console.log(httpcall);
    this.slidesService.getSlides()
                      .then(slides => this.assignSlides(slides));
  }

  assignSlides(d) {
    this.slides = d;
    if (Array.isArray(this.slides) && this.slides.length > 0) {
      var rando = Math.floor(Math.random() * (this.slides.length) );
      this.selectedSlide = this.slides[rando];
    }
  }

  makeHero(slide) {
    this.selectedSlide = slide;
  }

}
