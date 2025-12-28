import { Component, Input, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';

import { AlertService } from '@shared/services';
import { CommentsSectionService } from '../comments-section.service';
import { IComment } from './comment-card.interfaces';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss'],
  standalone: false
})

export class CommentCardComponent implements OnInit {

  @Input()
  comment!: IComment;
  @Input()
  userId!: string;
  @Input()
  isLoggedIn!: boolean;

  commentLiked: boolean | undefined;
  commentDisliked: boolean | undefined;

  constructor(
    private alertService: AlertService,
    private commentsSectionService: CommentsSectionService,
  ) { }

  ngOnInit() {
    this.comment.alreadyLiked ? this.commentLiked = true : this.commentLiked = false;
    this.comment.alreadyDisliked ? this.commentDisliked = true : this.commentDisliked = false;
  }

  onThumbsUp() {
    if (!this.isLoggedIn) {
      return this.alertService.error('Sign in first');
    }
    if (this.commentDisliked) {
      this.commentDisliked = false;
      this.comment.disLikes -= 1;
    }
    if (this.commentLiked) {
      this.commentLiked = false;
      this.comment.likes -= 1;
    } else {
      this.commentLiked = true;
      this.comment.likes += 1;
    }

    this.commentsSectionService.likeComment(this.comment._id)
      .pipe(
        debounceTime(200)
      )
      .subscribe(
        (res: any) => {

        },
        (error: any) => {

        }
      );
  }

  onThumbsDown() {
    if (!this.isLoggedIn) {
      return this.alertService.error('Sign in first');
    }
    if (this.commentLiked) {
      this.commentLiked = false;
      this.comment.likes -= 1;
    }
    if (this.commentDisliked) {
      this.commentDisliked = false;
      this.comment.disLikes -= 1;
    } else {
      this.commentDisliked = true;
      this.comment.disLikes += 1;
    }
    this.commentsSectionService.dislikeComment(this.comment._id)
      .pipe(
        debounceTime(200)
      )
      .subscribe(
        (res: any) => {

        },
        (error: any) => {

        }
      );
  }

}
