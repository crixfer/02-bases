import { Routes } from '@angular/router';
import { CounterPagesComponent } from './pages/counter-pages/counter-pages.component';
import { HeroPagesComponent } from './pages/hero/hero-pages.component';
import { DragonBallPagesComponent } from './pages/dragonBall-pages/dragon-ball-pages/dragon-ball-pages.component';
import { DragonBallSuperPagesComponent } from './pages/dragonBall-pages/dragon-ball-super-pages/dragon-ball-super-pages.component';

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
    component: DragonBallPagesComponent,
  },
  {
    path: 'dragonball-super',
    component: DragonBallSuperPagesComponent,
  },

  {
    path: '**',
    redirectTo: '',
  },
];
