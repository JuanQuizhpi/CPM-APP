import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './pages/home/home.component';
import { SingUpComponent } from './pages/auth/sing-up/sing-up.component';
import { LogInComponent } from './pages/auth/log-in/log-in.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'auth',
    children: [
      { path: 'sing-up', component: SingUpComponent },
      { path: 'log-in', component: LogInComponent },
    ],
  },
];
