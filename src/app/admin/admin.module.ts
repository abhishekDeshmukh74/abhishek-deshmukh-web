import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { LoadingSpinnerModule } from '@shared/components/loading-spinner/loading-spinner.module';
import { ProjectCardModule } from '@shared/components/project-card/project-card.module';
import { AdminRoutingModule } from './admin-routing.module';
import { SendNotificationComponent } from './send-notification/send-notification.component';
import { SocialActivityComponent } from './social-activity/social-activity.component';
import { TaskListComponent } from './task-list/task-list.component';
import { SubscribersComponent } from './subscribers/subscribers.component';

@NgModule({
  declarations: [
    TaskListComponent,
    SendNotificationComponent,
    SocialActivityComponent,
    SubscribersComponent,
  ],
  imports: [
    CommonModule,
    ProjectCardModule,
    AdminRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    FormsModule,
    LoadingSpinnerModule,
  ],
})

export class AdminModule { }
