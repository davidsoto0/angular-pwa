import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmComponent } from './features/film/film.component';
import { HomeComponent } from './features/home/home.component';
import { PeopleComponent } from './features/people/people.component';
import { PlanetsComponent } from './features/planets/planets.component';
import { SpeciesComponent } from './features/species/species.component';
import { StarshipsComponent } from './features/starships/starships.component';
import { VehiclesComponent } from './features/vehicles/vehicles.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'planets',
    component: PlanetsComponent
  },
  {
    path: 'people',
    component: PeopleComponent
  },
  {
    path: 'film/:id',
    component: FilmComponent
  },
  {
    path: 'species',
    component: SpeciesComponent
  },
  {
    path: 'vehicles',
    component: VehiclesComponent
  },
  {
    path: 'starships',
    component: StarshipsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
