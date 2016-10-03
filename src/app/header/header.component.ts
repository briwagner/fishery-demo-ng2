import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  links = ['Find a Species', 'Discover Our Work', 'Learn About Us', 'Explore Our Resources']

  ngOnInit() {
  }

}
