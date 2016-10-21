import { Component, OnInit } from '@angular/core';

let Links = [{
    "name": "Find a species",
    "path": "species",
    "weight": 0
  },
  {
    "name": "Discover our work",
    "path": "our-work",
    "weight": 1
  },
  {
    "name": "Learn about us",
    "path": "about-us",
    "weight": 2
  },
  {
    "name": "A-Z Index",
    "path": "index",
    "weight": 4
  },
  {
    "name": "Explore our resources",
    "path": "resources",
    "weight": 3
  }]

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor() { }

  private links = Links;

  ngOnInit() {
    this.links = this.links.sort( (l1, l2) => l1.weight - l2.weight );
  }

}
