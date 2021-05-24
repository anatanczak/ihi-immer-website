import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @ViewChild('search') searchElement: ElementRef;
  public searchBarIsOpen = false;
  public navBarMenuIsOpen = false;

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}

  public onClickSearchIcon() {
    this.searchBarIsOpen = true;
    setTimeout(() => {
      this.searchElement.nativeElement.focus();
    }, 0);
  }
  public onClickCloseIcon() {
    this.searchBarIsOpen = false;
    setTimeout(() => {
      this.searchElement.nativeElement.value = '';
    }, 0);
  }
  public toggleSearchIconDisplay() {
    return this.searchBarIsOpen ? 'none' : 'block';
  }
  public toggleCloseIconDisplay() {
    return this.searchBarIsOpen ? 'block' : 'none';
  }
}
