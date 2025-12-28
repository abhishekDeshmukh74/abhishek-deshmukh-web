import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ThrownError } from '@shared/interfaces';
import { AlertService } from '@shared/services';
import { AdminService } from '../admin.service';
import { ISocialActivity } from './social-activity.interfaces';

@Component({
  templateUrl: './social-activity.component.html',
  styleUrls: ['./social-activity.component.scss'],
  standalone: false
})
export class SocialActivityComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | any;
  @ViewChild(MatSort, { static: true }) sort: MatSort | any;

  displayedColumns = ['id', 'url', 'totalViews', 'facebook', 'pinterest'];
  dataSource = new MatTableDataSource<ISocialActivity>();
  showSpinner = true;

  constructor(
    private adminService: AdminService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.adminService.getSocialStats().subscribe(
      (data: ISocialActivity[]) => {
        this.dataSource.data = data;
        this.showSpinner = false;
      },
      (error: ThrownError) => {
        this.showSpinner = false;
        this.alertService.error(error.message);
      }
    );
  }

  applyFilter(event: any) {
    this.dataSource.filter = event.target.value.trim().toLowerCase();
  }
}
