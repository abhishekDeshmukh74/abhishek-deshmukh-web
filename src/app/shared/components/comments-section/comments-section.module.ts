import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MentionModule } from 'angular-mentions';

import { PipesModule } from '@shared/pipes/pipes.module';
import { LoadingSpinnerModule } from './../loading-spinner/loading-spinner.module';
import { CommentCardComponent } from './comment-card/comment-card.component';
import { CommentsSectionComponent } from './comments-section.component';

@NgModule({
  declarations: [
    CommentsSectionComponent,
    CommentCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    PipesModule,
    LoadingSpinnerModule,
    MentionModule,
  ],
  exports: [
    CommentsSectionComponent,
  ]
})

export class CommentsSectionModule { }
