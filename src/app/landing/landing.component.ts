import { Component, OnInit } from '@angular/core';

// components
import { ColorboxComponent } from '../colorbox/colorbox.component';
import { FeaturedComponent } from '../featured/featured.component';
import { MultimediaComponent } from '../multimedia/multimedia.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
