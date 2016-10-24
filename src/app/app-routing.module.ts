import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { LandingComponent } from './landing/landing.component';
import { ColorboxComponent } from './colorbox/colorbox.component';
import { ArticleComponent } from './article/article.component';

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
