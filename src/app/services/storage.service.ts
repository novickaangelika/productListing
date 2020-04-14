import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class StorageService {
    constructor(@Inject(PLATFORM_ID) private platformId) { }

    setItem(name: string, item: any) {
        if (isPlatformBrowser(this.platformId)) {
            const itemString = JSON.stringify(item);

            localStorage.setItem(name, itemString);
        }
    }

    getItem<T>(name: string): T {
        if (isPlatformBrowser(this.platformId)) {
            const itemString = localStorage.getItem(name);

            try {
                return JSON.parse(itemString) as T;
            } catch (error) {
                return undefined;
            }
        }
    }

    remove(name: string) {
        if (isPlatformBrowser(this.platformId)) {
            localStorage.removeItem(name);
        }
    }
}
