import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ConsentRoutingModule } from './consent-routing.module';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';


@NgModule({
  declarations: [
    PrivacyPolicyComponent,
    TermsOfServiceComponent
  ],
  imports: [
    CommonModule,
    ConsentRoutingModule
  ]
})

export class ConsentModule { }
