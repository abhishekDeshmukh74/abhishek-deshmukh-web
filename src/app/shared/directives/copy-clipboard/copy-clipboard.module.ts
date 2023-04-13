import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CopyClipboardDirective } from './copy-clipboard.directive';

@NgModule({
  declarations: [
    CopyClipboardDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CopyClipboardDirective
  ]
})

export class CopyClipboardModule { }
