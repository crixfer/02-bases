import { Routes } from '@angular/router';
import { CounterPagesComponent } from './pages/counter-pages/counter-pages.component';
import { HeroPagesComponent } from './pages/hero/hero-pages.component';
import { DragobBallPagesComponent } from './pages/dragobBall-pages/dragob-ball-pages/dragob-ball-pages.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterPagesComponent,
  },
  {
    path: 'hero',
    component: HeroPagesComponent,
  },

  {
    path: 'dragonball',
    component: DragobBallPagesComponent,
  },

  {
    path: '**',
    redirectTo: '',
  },
];
