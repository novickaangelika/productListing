import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

function _window(): Window {
    return window;
}

@Injectable()
export class WindowService {
    constructor(
        @Inject(DOCUMENT) private document: Document) { }

    get window(): Window {
        return _window();
    }

    getScrollPosition() {
        return this.document.body.scrollTop || this.document.documentElement.scrollTop || this.window.pageYOffset || 0;
    }

}
