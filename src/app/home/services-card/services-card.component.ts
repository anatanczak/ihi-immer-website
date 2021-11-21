import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-card',
  templateUrl: './services-card.component.html',
  styleUrls: ['./services-card.component.scss'],
})
export class ServicesCardComponent implements OnInit {
  @Input() title = '';
  @Input() text = '';

  constructor() {}

  ngOnInit(): void {}
}
