import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PORTFOLIO_DATA } from './shared/data';
import { HomeComponent } from './portfolio/home/home.component';
import { AdminGuard } from './admin/admin.guard';


const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: {
      title: PORTFOLIO_DATA.HOME.META.TITLE,
      description: PORTFOLIO_DATA.HOME.META.DESCRIPTION,
      depth: 0,
      schema: PORTFOLIO_DATA.HOME.SCHEMA,
    },
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./portfolio/about-me/about-me.module').then(
        (m) => m.AboutMeModule
      ),
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'consent',
    loadChildren: () =>
      import('./consent/consent.module').then((m) => m.ConsentModule),
  },
  // {
  //   path: 'contact-me',
  //   loadChildren: () => import('./portfolio/contact-me/contact-me.module').then(m => m.ContactMeModule)
  // },
  // {
  //   path: 'resume',
  //   loadChildren: () => import('./portfolio/my-resume/my-resume.module').then(m => m.MyResumeModule)
  // },
  {
    path: 'admin',
    canLoad: [AdminGuard],
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./core/components/page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      anchorScrolling: 'enabled',
      enableTracing: false,
      initialNavigation: 'enabledBlocking',
      onSameUrlNavigation: 'ignore',
      scrollPositionRestoration: 'top',
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
