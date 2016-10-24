import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { LandingComponent } from './landing/landing.component';
import { ColorboxComponent } from './colorbox/colorbox.component';
import { ArticleComponent } from './article/article.component';
import { SlideComponent } from './slide/slide.component';
import { PodcastComponent } from './podcast/podcast.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full'
  },
  {
    path: 'article/:id',
    component: ArticleComponent
  },
  {
    path: 'slide/:id',
    component: SlideComponent
  },
  {
    path: 'podcast/:id',
    component: PodcastComponent
  },
  {
    path: 'colorbox',
    component: ColorboxComponent
  },
  {
    path: '**',
    component: LandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class FisheriesRoutingModule { }
