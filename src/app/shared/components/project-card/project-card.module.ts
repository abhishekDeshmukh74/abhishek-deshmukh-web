import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoadingSpinnerModule } from '../loading-spinner/loading-spinner.module';
import { ProjectCardComponent } from './project-card.component';

@NgModule({
  declarations: [
    ProjectCardComponent,
  ],
  imports: [
    CommonModule,
    LoadingSpinnerModule,
    RouterModule
  ],
  exports: [
    ProjectCardComponent,
  ]
})

export class ProjectCardModule { }
