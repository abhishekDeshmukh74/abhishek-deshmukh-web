import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '@environment';

@Injectable({
  providedIn: 'root'
})

export class BlogService {

  constructor(
    private http: HttpClient,
  ) { }

  loginUser(code: string) {
    return this.http.post(`${environment.apiUrl}/users`,
      { googleCode: code }
    );
  }
}
