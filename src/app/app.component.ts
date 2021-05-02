import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ihi immer';

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'de', 'ua']);
    translate.setDefaultLang('en');
  }
}
