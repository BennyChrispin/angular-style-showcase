import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HoverHighlightDirective } from './hover-highlight.directive';
import { FooterComponent } from './component/footer/footer.component';
import { SportComponent } from './component/sport/sport.component';
import { AboutComponent } from './component/about/about.component';
import { ContanctComponent } from './component/contanct/contanct.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HoverHighlightDirective,
    FooterComponent,
    SportComponent,
    AboutComponent,
    ContanctComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
