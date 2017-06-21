import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

// import css

import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  exports: [],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule { }
