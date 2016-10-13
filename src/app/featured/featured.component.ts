import { Component, OnInit } from '@angular/core';

import { ArticlesService } from '../services/articles.service';
import { Article } from '../models/article';
import { TopicsService } from '../services/topics.service';
import { Topic } from '../models/topic';

import { FilterTopicPipe } from '../shared/filter-topic.pipe';

// for static mock data only
import { ARTICLES } from '../mock-articles';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})

export class FeaturedComponent implements OnInit {

  constructor(
    private articlesService: ArticlesService,
    private topicsService: TopicsService 
    ) {}

  topics: Topic[];
  articles: Article[];
  filteringFor = '';
  articleMax = 4;

  getMoreArticles() {
    this.articleMax += 4;
  }

  clearFilter() {
    this.filteringFor = '';
    this.articleMax = 4;
  }

  filterFor(topic) {
    this.filteringFor = topic;
  }

  noArticles() {
    if (this.articles !== undefined  && this.articles.length > 0){
      return true
    }
  }

  ngOnInit():void {
    this.articlesService.getArticles()
                        .then(articles => this.articles = articles);

    this.topicsService.getTopics()
                      .then(topics => this.topics = topics);
  }

}
