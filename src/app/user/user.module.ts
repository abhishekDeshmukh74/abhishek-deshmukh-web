import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';

import { PipesModule } from '@shared/pipes/pipes.module';
import { UserRoutingModule } from './user-routing.module';
import { LoadingSpinnerModule } from '@shared/components/loading-spinner/loading-spinner.module';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationCardComponent } from './notifications/notification-card/notification-card.component';

@NgModule({
  declarations: [
    NotificationsComponent,
    NotificationCardComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatPaginatorModule,
    MatCardModule,
    PipesModule,
    MatDividerModule,
    LoadingSpinnerModule,
  ]
})

export class UserModule { }
