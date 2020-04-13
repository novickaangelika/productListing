import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

function _window(): Window {
    return window;
}

@Injectable()
export class WindowService {
    constructor(
        @Inject(DOCUMENT) private document: Document,
        @Inject(PLATFORM_ID) private platformId: Object) { }

    get window(): Window {
        return _window();
    }

    getScrollPosition() {
        if (isPlatformBrowser(this.platformId)) {
            return this.document.body.scrollTop || this.document.documentElement.scrollTop || this.window.pageYOffset || 0;
        }
        return 0;
    }
}
