import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})

export class HeaderMobileComponent extends HeaderComponent {
  showMenu = false;

  toogleNav() {
    this.showMenu = !this.showMenu;
  }
}
