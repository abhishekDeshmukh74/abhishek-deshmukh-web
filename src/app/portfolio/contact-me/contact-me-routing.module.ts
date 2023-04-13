import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PORTFOLIO_DATA } from '@shared/data/portfolio.data';
import { ContactMeComponent } from './contact-me.component';

const contactMeRoutes: Routes = [
  {
    path: '',
    component: ContactMeComponent,
    data: {
      title: PORTFOLIO_DATA.CONTACT_ME.META.TITLE,
      description: PORTFOLIO_DATA.CONTACT_ME.META.DESCRIPTION,
      depth: 1
    }
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(contactMeRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ContactMeRoutingModule { }
