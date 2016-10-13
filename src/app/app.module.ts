import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// no routes yet. this is a custom service
// import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './main-app/app.component';
import { HeaderComponent } from './header/header.component';
import { ColorboxComponent } from './colorbox/colorbox.component';
import { FeaturedComponent } from './featured/featured.component';
import { FooterComponent } from './footer/footer.component';
import { FilterTopicPipe } from './shared/filter-topic.pipe';
import { SalmonReportComponent } from './salmon-report/salmon-report.component';
import { SplitUnderscorePipe } from './shared/split-underscore.pipe';
import { FilterColumnsPipe } from './shared/filter-columns.pipe';
import { FilterSalmonPipe } from './shared/filter-salmon.pipe';
import { SlidesService } from './services/slides.service';
import { ArticlesService } from './services/articles.service';
import { TopicsService } from './services/topics.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ColorboxComponent,
    FeaturedComponent,
    FooterComponent,
    FilterTopicPipe,
    SalmonReportComponent,
    SplitUnderscorePipe,
    FilterColumnsPipe,
    FilterSalmonPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
    SlidesService,
    ArticlesService,
    TopicsService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
