import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})

export class AlertService {

  constructor(
    public snackBar: MatSnackBar
  ) { }

  public success(message: string, action = '', duration = 3000) {
    this.snackBar.open(message, action, {
      duration,
      verticalPosition: 'top',
      panelClass: ['success-snackbar'],
    });
  }

  public error(message: string, action = 'X') {
    this.snackBar.open(message, action, {
      verticalPosition: 'top',
      panelClass: ['error-snackbar'],
    });
  }
}
