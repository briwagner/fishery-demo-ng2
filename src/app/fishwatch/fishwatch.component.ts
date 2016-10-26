import { Input, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { FishwatchService } from '../services/fishwatch.service';

@Component({
  selector: 'app-fishwatch',
  templateUrl: './fishwatch.component.html',
  styleUrls: ['./fishwatch.component.css']
})
export class FishwatchComponent implements OnInit {

  favorites = ["Salmon", "Yellowtail", "Tuna"];
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private fishwatchservice: FishwatchService
  ) { }

  ngOnInit() {

  }
// 
  requestThis(query) {
    this.fishwatchservice.makeRequest(query)
                         .subscribe(
                           p => console.log(p),
                           e => console.log(e)
                         );
  }

  makeRequest() {
   }

}
