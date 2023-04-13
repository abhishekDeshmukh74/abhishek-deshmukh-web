import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { LoadingSpinnerModule } from '@shared/components/loading-spinner/loading-spinner.module';
import { MyResumeRoutingModule } from './my-resume-routing.module';
import { MyResumeComponent } from './my-resume.component';


@NgModule({
  declarations: [
    MyResumeComponent
  ],
  imports: [
    CommonModule,
    MyResumeRoutingModule,
    PdfViewerModule,
    LoadingSpinnerModule,
  ]
})

export class MyResumeModule { }
