import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './main-app/app.component';
import { HeaderComponent } from './header/header.component';
import { ColorboxComponent } from './colorbox/colorbox.component';
import { FeaturedComponent } from './featured/featured.component';
import { FooterComponent } from './footer/footer.component';
import { FilterPipePipe } from './shared/filter-pipe.pipe';
import { FilterTopicPipe } from './shared/filter-topic.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ColorboxComponent,
    FeaturedComponent,
    FooterComponent,
    FilterPipePipe,
    FilterTopicPipe
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
