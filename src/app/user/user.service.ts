import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '@environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  getNotifications(userId: string, pageNumber = 1) {
    if (!userId) {
      throw new Error('No user logged in');
    }
    return this.http.get(`${environment.apiUrl}/notifications`, {
      params: new HttpParams()
        .set('pageNumber', encodeURIComponent(pageNumber))
    });
  }

  readNotifications(ids: string[]) {
    return this.http.put(`${environment.apiUrl}/notifications`, { ids });
  }
}
