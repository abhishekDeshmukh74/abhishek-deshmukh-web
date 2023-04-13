import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PORTFOLIO_DATA } from '@shared/data/portfolio.data';
import { MyResumeComponent } from './my-resume.component';

const resumeRoutes: Routes = [
  {
    path: '',
    component: MyResumeComponent,
    data: {
      title: PORTFOLIO_DATA.MY_RESUME.META.TITLE,
      description: PORTFOLIO_DATA.MY_RESUME.META.DESCRIPTION,
      depth: 1
    }
  }
];


@NgModule({
  imports: [RouterModule.forChild(resumeRoutes)],
  exports: [RouterModule]
})

export class MyResumeRoutingModule { }
