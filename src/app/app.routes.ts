import { provideRouter, RouterConfig } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {TracksComponent} from "./tracks/tracks.component";
import {AboutComponent} from "./about/about.component";
import {SocialComponent} from "./social/social.component";

export const routes: RouterConfig = [
  { path: '', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'tracks', component: TracksComponent },
  { path: 'social', component: SocialComponent },
  { path: 'about', component: AboutComponent },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];