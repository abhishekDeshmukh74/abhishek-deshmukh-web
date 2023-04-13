import { Component, OnInit } from '@angular/core';
import { PDFProgressData } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-my-resume',
  templateUrl: './my-resume.component.html',
  styleUrls: ['./my-resume.component.scss']
})

export class MyResumeComponent implements OnInit {

  public loading = true;

  constructor() { }

  ngOnInit() { }

  onProgress(progressData: PDFProgressData) {
    this.loading = progressData.loaded < progressData.total;
  }

}
