import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarComponent } from './navbar/navbar.component';
import { APP_BASE_HREF, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { Content1Component } from './content1/content1.component';
import { Content2Component } from './content2/content2.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    Content1Component,
    Content2Component,
    HomeComponent,
    ContactComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/angular/' },
    { provide: LocationStrategy, useClass: PathLocationStrategy }.
],
  bootstrap: [AppComponent]
})
export class AppModule { }
