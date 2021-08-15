import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharSearchComponent } from './char-search/char-search.component';
import { ServerSearchComponent } from './char-search/server-search/server-search.component';

@NgModule({
  declarations: [
    AppComponent,
    CharSearchComponent,
    ServerSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
