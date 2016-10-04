import { Component, OnInit } from '@angular/core';

const LINKS = [
  'Link One', 
  'Link Two', 
  'Link Three'
]

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  links = LINKS;

  constructor() { }

  ngOnInit() {
  }

}
