import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./feature-modules/home/components/home.component').then(
        (m) => m.HomeComponent
      ),
  },
  {
    path: 'join-us',
    loadComponent: () =>
      import('./feature-modules/join-us/components/join/join.component').then(
        (m) => m.JoinComponent
      ),
  },
  {
    path: 'training',
    loadComponent: () =>
      import(
        './feature-modules/training/components/training/training.component'
      ).then((m) => m.TrainingComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import(
        './feature-modules/contact/components/contact/contact.component'
      ).then((m) => m.ContactComponent),
  },
  {
    path: 'championship-events',
    loadComponent: () =>
      import(
        './feature-modules/championship-events/components/championship-events/championship-events.component'
      ).then((m) => m.ChampionshipEventsComponent),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules, // Change strategy when app grows in sizea
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
