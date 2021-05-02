import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss'],
})
export class LanguageSelectComponent implements OnInit {
  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
