import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public services = [
    {
      title: 'Service1Title',
      text: 'Service1Text',
    },
    {
      title: 'Service2Title',
      text: 'Service2Text',
    },
    {
      title: 'Service3Title',
      text: 'Service3Text',
    },
    {
      title: 'Service4Title',
      text: 'Service4Text',
    },
    {
      title: 'Service5Title',
      text: 'Service5Text',
    },
  ];
  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}
}
