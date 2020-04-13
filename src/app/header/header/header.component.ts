import { Component, HostListener } from '@angular/core';
import { WindowService } from '../services/window.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  windowScrolled: boolean;
  topPositionToStartShowingScroll = 100;

  constructor(
    private windowService: WindowService) {}

  @HostListener('window:scroll')
  onWindowScrolled() {
      const scrollPosition = this.windowService.getScrollPosition();

      if (scrollPosition >= this.topPositionToStartShowingScroll) {
          this.windowScrolled = true;
      } else {
          this.windowScrolled = false;
      }
  }
}
