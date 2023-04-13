import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PORTFOLIO_DATA } from '@shared/data/portfolio.data';
import { AboutMeComponent } from './about-me.component';

const aboutMeRoutes: Routes = [
  {
    path: '',
    component: AboutMeComponent,
    data: {
      title: PORTFOLIO_DATA.ABOUT_ME.META.TITLE,
      description: PORTFOLIO_DATA.ABOUT_ME.META.DESCRIPTION,
      depth: 1
    }
  },
];


@NgModule({
  imports: [RouterModule.forChild(aboutMeRoutes)],
  exports: [RouterModule]
})

export class AboutMeRoutingModule { }
