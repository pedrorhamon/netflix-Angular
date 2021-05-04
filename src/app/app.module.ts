import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullBannerComponent } from './shared/full-banner/full-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FullBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
