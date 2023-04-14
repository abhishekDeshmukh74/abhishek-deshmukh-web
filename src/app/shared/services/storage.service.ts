import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { storageFactory } from 'storage-factory';

import { CONSTANTS } from '@constants';

@Injectable({
    providedIn: 'root'
})

export class StorageService implements OnDestroy {

    localStorageWrapper = storageFactory(() => localStorage);

    private storageSub = new BehaviorSubject<{ key: string, value: any } | null>(null);
    public watchStorage = this.storageSub.asObservable().pipe();

    constructor() {
        this.startWatching();
    }

    private startWatching() {
       addEventListener && addEventListener('storage', this.storageEventListener.bind(this));
    }

    private stopWatching() {
        removeEventListener('storage', this.storageEventListener.bind(this));
        this.storageSub.complete();
    }

    private storageEventListener(event: StorageEvent) {
        if (event.storageArea === localStorage && event.newValue && event.key) {
            this.storageSub.next({ key: event.key, value: event.newValue });
        }
    }

    store(key: string, data: string) {
        this.localStorageWrapper.setItem(key, data);
        this.storageSub.next({ key, value: data });
    }

    clear(key: string) {
        this.localStorageWrapper.removeItem(key);
        this.storageSub.next({ key, value: null });
    }

    getUser() {
        const user = this.localStorageWrapper.getItem(CONSTANTS.LOCAL_STORAGE_KEYS.USER);
        if (user) {
            return JSON.parse(user);
        }
        return;
    }

    getToken() {
        const token = this.localStorageWrapper.getItem(CONSTANTS.LOCAL_STORAGE_KEYS.TOKEN);
        if (token) {
            return token;
        }
        return;
    }

    isLoggedIn(): boolean {
        const isLoggedIn = this.localStorageWrapper.getItem(CONSTANTS.LOCAL_STORAGE_KEYS.IS_LOGGED_IN);
        if (isLoggedIn) {
            return true;
        }
        return false;
    }

    ngOnDestroy() {
        this.stopWatching();
    }

}
