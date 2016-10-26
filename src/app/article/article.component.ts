import { Input, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { ArticlesService } from '../services/articles.service';
import { Article } from '../models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article;
  articles: Article[];
  id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private articlesservice: ArticlesService
  ) { }

  ngOnInit() {
    // this.getArticle();
    this.route.params.subscribe( params => {
      this.id = +params['id'] || -1 
    });
    this.getArticles(this.id);
  }

  getArticle() {
    this.route.params.forEach( (params) => {
      this.articlesservice.getArticle(params['id'])
                          .then( d => this.assignArticle(d) );
                        //   .subscribe(
                        //     p => this.assignArticle(p),
                        //     e => console.log(e),
                        //     () => console.log('complete article fetch')
                        // );
    });
  }

  getArticles(pathId) {
    this.articlesservice.getArticles()
                        .subscribe(
                          p => {
                            this.articles = p;
                            if (pathId == -1) {
                              this.assignArticle(p[0]);
                            } else {
                              this.assignArticle( this.articles.find( obj => obj.id == pathId) );
                            }
                        },
                        e => console.log('error', e)
                        );
  }

  assignArticle(art) {
    this.article = art;
  }

}
