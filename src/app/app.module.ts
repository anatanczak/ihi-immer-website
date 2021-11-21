import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { SparePartsComponent } from './spare-parts/spare-parts.component';
import { TipsComponent } from './tips/tips.component';
import { SparePartComponent } from './spare-part/spare-part.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LanguageSelectComponent } from './nav-bar/language-select/language-select.component';
import { HamburgerButtonComponent } from './nav-bar//hamburger-button/hamburger-button.component';
import { ServicesCardComponent } from './home/services-card/services-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    SparePartsComponent,
    TipsComponent,
    SparePartComponent,
    LanguageSelectComponent,
    HamburgerButtonComponent,
    ServicesCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
