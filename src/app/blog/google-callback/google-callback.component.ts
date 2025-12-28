import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ThrownError } from '@shared/interfaces';
import { AlertService, StorageService } from '@shared/services';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-google-callback',
  templateUrl: './google-callback.component.html',
  styleUrls: ['./google-callback.component.scss'],
  standalone: false
})

export class GoogleCallbackComponent implements OnInit {

  private code!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private alertService: AlertService,
    private blogService: BlogService,
    private storageService: StorageService,
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.code = params['code'];
    });

    this.blogService.loginUser(this.code)
      .subscribe(
        (res: any) => {
          this.storageService.store('isLoggedIn', 'true');
          this.storageService.store('user', JSON.stringify(res.user));
          this.storageService.store('token', res.token);
          open('', '_self')?.close();
        },
        (error: ThrownError) => {
          this.alertService.error('Login failed');
          open('', '_self')?.close();
        }
      );
  }

}
