import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @ViewChild('search') searchElement: ElementRef;
  searchBarIsOpen = false;
  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}

  onClickSearchIcon() {
    this.searchBarIsOpen = true;
    setTimeout(() => {
      this.searchElement.nativeElement.focus();
    }, 0);
  }
  onClickCloseIcon() {
    this.searchBarIsOpen = false;
    setTimeout(() => {
      this.searchElement.nativeElement.value = '';
    }, 0);
  }
  toggleSearchIconDisplay() {
    return this.searchBarIsOpen ? 'none' : 'block';
  }
  toggleCloseIconDisplay() {
    return this.searchBarIsOpen ? 'block' : 'none';
  }
}
