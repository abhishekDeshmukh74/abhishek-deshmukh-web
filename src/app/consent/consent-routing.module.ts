import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CONSENT_DATA } from '@shared/data/consent.data';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';

const consentRoutes: Routes = [
  {
    path: CONSENT_DATA.PRIVACY_POLICY.PATH,
    component: PrivacyPolicyComponent,
    data: {
      title: CONSENT_DATA.PRIVACY_POLICY.META.TITLE,
      description: CONSENT_DATA.PRIVACY_POLICY.META.DESCRIPTION,
      depth: 1
    }
  },
  {
    path: CONSENT_DATA.TERMS_OF_SERVICE.PATH,
    component: TermsOfServiceComponent,
    data: {
      title: CONSENT_DATA.TERMS_OF_SERVICE.META.TITLE,
      description: CONSENT_DATA.TERMS_OF_SERVICE.META.DESCRIPTION,
      depth: 1
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(consentRoutes)],
  exports: [RouterModule]
})

export class ConsentRoutingModule { }
