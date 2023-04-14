import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { CONSTANTS } from '@constants';
import { AlertService } from '@shared/services';

@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements CanLoad {

  constructor(
    private alertService: AlertService,
    private router: Router,
  ) { }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (typeof localStorage !== 'undefined') {
      const user: string | any = localStorage?.getItem(CONSTANTS.LOCAL_STORAGE_KEYS.USER);
      if (JSON.parse(user)?.email === 'abhishekdeshmukh74@gmail.com') {
        return true;
      }
    }
    this.alertService.error(CONSTANTS.ALERT_MESSAGES.ADMIN_RESTRICTED_AREA);
    this.router.navigate(['/']);
    return false;
  }

}
