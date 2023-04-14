import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ThrownError } from '@shared/interfaces';
import { AlertService } from '@shared/services';
import { AdminService } from '../admin.service';
import { ISubscriber } from './subscribers.interfaces';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.scss']
})

export class SubscribersComponent implements OnInit {

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayedColumns = ['id', 'email', 'name', 'avatarUrl'];
  dataSource = new MatTableDataSource<ISubscriber>();
  showSpinner = true;

  constructor(
    private alertService: AlertService,
    private adminService: AdminService,
  ) { }

  ngOnInit() {

    this.adminService.getSubscribers()
      .subscribe(
        (subscribers: ISubscriber[]) => {
          this.dataSource.data = subscribers;
          this.dataSource.sort = this.sort;
          this.showSpinner = false;
        },
        (error: ThrownError) => {
          this.showSpinner = false;
          this.alertService.error(error.message);
        });
  }

}
