import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/trends', pathMatch: 'full' },
  {
    path: 'trends',
    loadChildren: () =>
      import('./features/trends/trends.module').then((m) => m.TrendsModule),
  },
  {
    path: 'sport',
    loadChildren: () =>
      import('./features/sport/sport.module').then((m) => m.SportModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./features/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./features/contact/contact.module').then((m) => m.ContactModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
