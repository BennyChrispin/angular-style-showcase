import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MainContentComponent } from './component/main-content/main-content.component';
import { HoverHighlightDirective } from './hover-highlight.directive';
import { ChildOneComponent } from './component/main-content/child-one/child-one.component';
import { ChildTwoComponent } from './component/main-content/child-two/child-two.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    HoverHighlightDirective,
    ChildOneComponent,
    ChildTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
