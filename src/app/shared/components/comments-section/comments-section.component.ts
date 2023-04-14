import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { CONSTANTS } from '@constants';
import { environment } from '@environment';
import { AlertService, StorageService } from '@shared/services';
import { CommentsSectionService } from './comments-section.service';
import { ThrownError } from './../../interfaces/thrown-error.interface';
import { IUser } from './comment-card/comment-card.interfaces';
import { IComment } from '@shared/components/comments-section/comment-card/comment-card.interfaces';
import { commentValidations, commentValidationsMessages } from './comments-section.validator';

@Component({
  selector: 'app-comments-section',
  templateUrl: './comments-section.component.html',
  styleUrls: ['./comments-section.component.scss'],
})

export class CommentsSectionComponent implements OnInit, OnDestroy {

  @Input()
  blogPostTitle!: string;
  readonly commentValidationsMessages = commentValidationsMessages;
  maxSize = CONSTANTS.COMMENTS_DISPLAY_SIZE;

  user: IUser | any;
  replyToUsers: string[] | undefined;
  isLoggedIn!: boolean;
  showSpinner = true;
  showBtnSpinner = false;
  submitted = false;
  commentForm = new FormControl(null, commentValidations) as any;
  comments: IComment[] = [];
  mentionConfig: any = {};
  commentedUniqueUsers: IUser[] | any = [];
  repliedUserIds: string[] = [];

  private storageServiceSubscription: Subscription | undefined;

  constructor(
    private alertService: AlertService,
    private commentsSectionService: CommentsSectionService,
    private storageService: StorageService,
  ) { }

  ngOnInit() {
    this.getComments();
    this.getUserLoggedIn();
  }

  getUserLoggedIn() {
    this.storageServiceSubscription = this.storageService.watchStorage.subscribe((data: any) => {
      this.isLoggedIn = this.storageService.isLoggedIn();
      this.user = this.storageService.getUser();
    });
  }

  getComments() {
    this.commentsSectionService.getComments(this.blogPostTitle).subscribe(
      (res: IComment[]) => {
        this.showSpinner = false;
        this.comments = res;
        const commentedUsers = this.comments.map((comment) => {
          return {
            ...comment.user,
            name: `${comment.user.firstName} ${comment.user.lastName}`,
          };
        });
        this.commentedUniqueUsers = [
          ...new Map(commentedUsers.map((user: any) => [user.name, user])).values()
        ];
        this.mentionConfig = {
          items: this.commentedUniqueUsers,
          labelKey: 'name',
          triggerChar: '@',
          allowSpace: true,
        };
      },
      (error: ThrownError) => {
        this.showSpinner = false;
      }
    );
  }

  onNext() {
    this.maxSize += CONSTANTS.COMMENTS_DISPLAY_SIZE;
  }

  onClear() {
    this.commentForm.reset();
  }

  onComment() {
    if (this.commentForm.invalid) {
      this.alertService.error(CONSTANTS.ALERT_MESSAGES.COMMENT_VALIDATION_FAILED);
      return;
    }
    this.submitted = true;
    this.showBtnSpinner = true;

    if (this.commentForm?.value?.includes('@')) {
      const matches: string[] = this.commentForm.value.match(CONSTANTS.REGEX.FULLNAME_FROM_TEXT);
      const matchedNames = matches.map((match) => match.split('@')[1]);

      for (const matchedName of matchedNames) {
        for (const commentedUniqueUser of this.commentedUniqueUsers) {
          if (commentedUniqueUser.name === matchedName) {
            this.repliedUserIds.push(commentedUniqueUser._id);
            break;
          }
        }
      }
    }

    this.commentsSectionService.insertComment({
      blogPostTitle: this.blogPostTitle,
      comment: this.commentForm.value,
      repliedUsers: this.repliedUserIds,
      user: this.user.id,
    })
      .subscribe(
        (res: any) => {
          this.showBtnSpinner = false;
          this.commentForm.reset();
          this.alertService.success(CONSTANTS.ALERT_MESSAGES.COMMENT_ADDED);
          this.comments.unshift({
            ...res.createdComment,
            user: this.user
          });
        },
        (error: ThrownError) => {
          this.showBtnSpinner = false;
          this.alertService.error(error.message);
        }
      );
  }

  onLogIn() {
    this.showSpinner = true;

    open(
      environment.CONSENT_URL,
      '_blank',
      'location=yes,scrollbars=yes,width=500,height=500,chrome=yes,position=centerscreen.status=yes'
    );
    if (focus) {
      focus();
    }
    this.showSpinner = false;
  }

  ngOnDestroy() {
    this.storageServiceSubscription?.unsubscribe();
  }
}
