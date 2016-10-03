import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './main-app/app.component';
import { HeaderComponent } from './header/header.component';
import { ColorboxComponent } from './colorbox/colorbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ColorboxComponent
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
