import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-copy-code',
  templateUrl: './copy-code.component.html',
  styleUrls: ['./copy-code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CopyCodeComponent implements OnInit {

  @Input() code: string;

  constructor(
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() { }

  public notify(payload: string) {
    this.snackBar.open('Code Copied', '', {
      duration: 1000,
    });
  }

}
