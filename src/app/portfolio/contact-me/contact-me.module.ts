import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContactMeRoutingModule } from './contact-me-routing.module';
import { ContactMeComponent } from './contact-me.component';


@NgModule({
  declarations: [
    ContactMeComponent,
  ],
  imports: [
    CommonModule,
    ContactMeRoutingModule
  ]
})
export class ContactMeModule { }
