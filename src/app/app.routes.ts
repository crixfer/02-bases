import { Routes } from '@angular/router';
import { CounterPagesComponent } from './pages/counter-pages/counter-pages.component';
import { HeroPagesComponent } from './pages/hero/hero-pages.component';

export const routes: Routes = [
  {
    path: '/hero',
    component: HeroPagesComponent,
  },
  // {
  //   path: '/counter',
  //   component: CounterPagesComponent,
  // },
];
