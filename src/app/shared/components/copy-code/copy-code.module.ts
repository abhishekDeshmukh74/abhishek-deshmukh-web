import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { CopyClipboardModule } from '@shared/directives/copy-clipboard/copy-clipboard.module';
import { CopyCodeComponent } from './copy-code.component';

@NgModule({
  declarations: [
    CopyCodeComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    CopyClipboardModule
  ],
  exports: [
    CopyCodeComponent
  ]
})
export class CopyCodeModule { }
