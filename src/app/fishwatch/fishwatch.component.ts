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
  results;
  emptySearch = true;
  loading = false;
  clean = true;
  
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
    this.clean = false;
    this.loading = true;
    this.fishwatchservice.makeRequest(query)
                         .subscribe(
                           p => this.results = p,
                           e => console.log(e),
                           () => {
                             this.loading = false;
                             this.verifyResults()
                           }
                         );
  }

  verifyResults() {
    if (this.results.length < 1) {
      this.emptySearch = true
    } else {
      this.emptySearch = false
    }
  }

}
