import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
