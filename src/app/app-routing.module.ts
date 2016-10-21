import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { LandingComponent } from './landing/landing.component';
import { ColorboxComponent } from './colorbox/colorbox.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'colorbox',
    component: ColorboxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class FisheriesRoutingModule { }
