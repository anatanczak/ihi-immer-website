import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hamburger-button',
  templateUrl: './hamburger-button.component.html',
  styleUrls: ['./hamburger-button.component.scss'],
})
export class HamburgerButtonComponent implements OnInit {
  @Input() menuIsOpen = false;
  @Output() menuIsOpenChange = new EventEmitter<boolean>();

  constructor() {}

  public onClickHandler() {
    console.log('menu is button clicked');
    this.menuIsOpenChange.emit(!this.menuIsOpen);
  }

  ngOnInit(): void {}
}
