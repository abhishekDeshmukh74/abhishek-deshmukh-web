import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PORTFOLIO_DATA } from './shared/data';
import { HomeComponent } from './portfolio/home/home.component';

const routes: Routes = [];

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
    path: '**',
    loadChildren: () =>
      import('./core/components/page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
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
