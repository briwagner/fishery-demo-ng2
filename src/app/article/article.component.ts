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

  constructor(
    private router: Router,
    private articlesservice: ArticlesService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getArticle();
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

  assignArticle(art) {
    this.article = art;
  }

}
