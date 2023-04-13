import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { environment } from '@environment';

@Injectable({
  providedIn: 'root'
})

export class CommentsSectionService {

  constructor(
    private http: HttpClient,
  ) { }

  likeComment(comment: string) {
    return this.http.post(`${environment.apiUrl}/comment-Likes`, {
      comment,
    });
  }

  dislikeComment(comment: string) {
    return this.http.post(`${environment.apiUrl}/comment-dislikes`, {
      comment,
    });
  }

  // getConsentUrl() {
  //   return this.http.get(`${environment.apiUrl}/google/signin`).pipe(
  //     map((res: any) => {
  //       return res.consentUrl;
  //     })
  //   );
  // }

  getComments(blogPostTitle: string) {
    return this.http.get(`${environment.apiUrl}/comments`, {
      params: new HttpParams().set('blogPostTitle', encodeURIComponent(blogPostTitle))
    })
      .pipe(
        map((res: any) => {
          return res.comments;
        })
      );
  }

  insertComment(insertCommentParams: any) {
    return this.http.post(`${environment.apiUrl}/comments`, insertCommentParams);
  }
}
