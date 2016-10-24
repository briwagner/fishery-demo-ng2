import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FisheriesRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './main-app/app.component';

// components
import { HeaderComponent } from './header/header.component';
import { ColorboxComponent } from './colorbox/colorbox.component';
import { FeaturedComponent } from './featured/featured.component';
import { FooterComponent } from './footer/footer.component';
import { SalmonReportComponent } from './salmon-report/salmon-report.component';

// services
import { SlidesService } from './services/slides.service';
import { ArticlesService } from './services/articles.service';
import { TopicsService } from './services/topics.service';
import { SalmonService } from './services/salmon.service';

// pipes
import { FilterTopicPipe } from './shared/filter-topic.pipe';
import { SplitUnderscorePipe } from './shared/split-underscore.pipe';
import { FilterColumnsPipe } from './shared/filter-columns.pipe';
import { FilterSalmonPipe } from './shared/filter-salmon.pipe';
import { LandingComponent } from './landing/landing.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ColorboxComponent,
    FeaturedComponent,
    FooterComponent,
    LandingComponent,
    SalmonReportComponent,
    FilterTopicPipe,
    SplitUnderscorePipe,
    FilterColumnsPipe,
    FilterSalmonPipe,
    ArticleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true}),
    FisheriesRoutingModule,
  ],
  providers: [
    SlidesService,
    ArticlesService,
    TopicsService,
    SalmonService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
