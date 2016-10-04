import { Component, OnInit } from '@angular/core';
import { ARTICLES } from './articles';
import { FilterTopicPipe } from '../shared/filter-topic.pipe';

const TOPICS = [
  "Sustainable Fisheries",
  "Protected Resources",
  "Habitat Conservation",
  "International Affairs",
  "Science and Technology",
  "Aquaculture",
  "Seafood Inspection"
];

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})

export class FeaturedComponent implements OnInit {

  topics = TOPICS;
  articles = ARTICLES;
  filteringFor = '';
  articleMax = 4;

  getMoreArticles() {
    this.articleMax += 4;
  }

  filterFor(topic) {
    this.filteringFor = topic;
  }

  constructor() { }

  ngOnInit() {
  }

}
