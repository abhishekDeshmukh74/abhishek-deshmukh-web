import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '@environment';

@Injectable({
  providedIn: 'root'
})

export class HeaderService {

  constructor(
    private http: HttpClient
  ) { }

  public sendSubscriptionToTheServer(subscribeToNotificationsRequest: any) {
    return this.http.post(`${environment.apiUrl}/subscription`, subscribeToNotificationsRequest).toPromise();
  }

}
