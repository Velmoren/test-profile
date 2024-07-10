import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', loadChildren: () => import('./modules/profile-page/profile-page.module').then((m) => m.ProfilePageModule)}
];
