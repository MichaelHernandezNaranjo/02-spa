import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from "./components/about/about.component";
import { BuscadorComponent } from './components/buscador/buscador.component';
import { PersonajeComponent } from "./components/personaje/personaje.component";
import { PersonajesComponent } from "./components/personajes/personajes.component";

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'personajes/:id', component: PersonajesComponent },
  { path: 'personaje/:id', component: PersonajeComponent },
  { path: 'buscador/:termino', component: BuscadorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});