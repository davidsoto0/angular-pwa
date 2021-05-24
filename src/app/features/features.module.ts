import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { PlanetsComponent } from './planets/planets.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PeopleComponent } from './people/people.component';
import { SpeciesComponent } from './species/species.component';
import { FilmComponent } from './film/film.component';
import { MatTabsModule } from '@angular/material/tabs';
import { StarshipsComponent } from './starships/starships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';


@NgModule({
  declarations: [
    HomeComponent,
    PlanetsComponent,
    PeopleComponent,
    SpeciesComponent,
    FilmComponent,
    StarshipsComponent,
    VehiclesComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTabsModule
  ]
})
export class FeaturesModule { }
