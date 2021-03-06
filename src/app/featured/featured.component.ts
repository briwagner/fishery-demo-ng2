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

  topics: Topic[];
  articles: Article[];
  filteringFor = '';
  articleMax = 4;
  moreArticlesToShow = false;

  constructor(
    private articlesService: ArticlesService,
    private topicsService: TopicsService 
    ) {}

  getMoreArticles() {
    this.articleMax += 4;
    this.moreArticles();
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

  hideMoreButton() {
    return true
  }

  maxArticles() {
    if (this.articles !== undefined && this.articles.length > this.articleMax) {
      return true
    }
    return false
  }

  ngOnInit():void {
    this.articlesService.getArticles()
                        .subscribe(
                          p => this.articles = p,
                          e => console.log('failed articles', e),
                          () => this.moreArticles()
                          );

    this.topicsService.getTopics()
                      .subscribe(
                        p => this.topics = p,
                        e => console.log('failed topics', e),
                        // () => console.log('completed topics')
                      );
  }

  moreArticles() {
    if (this.articles.length > this.articleMax) {
      this.moreArticlesToShow = true;
    } else {
      this.moreArticlesToShow = false;
    }
  }

}
