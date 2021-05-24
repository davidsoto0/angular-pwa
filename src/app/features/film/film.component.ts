import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFilm } from 'src/app/shared/model/films.model';
import { IPerson } from 'src/app/shared/model/person.model';
import { IPlanets } from 'src/app/shared/model/planets.model';
import { ISpecie } from 'src/app/shared/model/species.model';
import { IStarship } from 'src/app/shared/model/starships.model';
import { IVehicle } from 'src/app/shared/model/vehicles.model';
import { FilmsService } from 'src/app/shared/service/films.service';
import { PeopleService } from 'src/app/shared/service/people.service';
import { PlanetsService } from 'src/app/shared/service/planets.service';
import { SpeciesService } from 'src/app/shared/service/species.service';
import { StarshipsService } from 'src/app/shared/service/starships.service';
import { VehiclesService } from 'src/app/shared/service/vehicles.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  idFilm: number;
  film: IFilm;
  people: IPerson[] = [];
  planets: IPlanets[] = [];
  species: ISpecie[] = [];
  vehicles: IVehicle[] = [];
  starships: IStarship[] = [];

  constructor(
    private route: ActivatedRoute,
    private filmsService: FilmsService,
    private peopleService: PeopleService,
    private planetsService: PlanetsService,
    private speciesService: SpeciesService,
    private vehiclesService: VehiclesService,
    private starshipsService: StarshipsService,
    private router: Router
  ) {
    const routeParams = this.route.snapshot.paramMap;
    this.idFilm = +routeParams.get('id') || 0;
  }


  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.people = [];
    this.planets = [];
    this.species = [];
    this.vehicles = [];
    this.starships = [];

    this.filmsService.getFilm(this.idFilm).subscribe(data => {
      console.log(data)
      this.film = data;

      // Obtenemos las personas
      this.film.characters.forEach(urlPerson => {
        this.peopleService.getPersonByUrl(urlPerson).subscribe(dataPerson => {
          this.people.push(dataPerson)
        })
      })

      // Obtenemos los planetas
      this.film.planets.forEach(urlPlanet => {
        this.planetsService.getPlanetByUrl(urlPlanet).subscribe(dataPlanet => {
          this.planets.push(dataPlanet)
        })
      })

      // Obtenemos las especies
      this.film.species.forEach(urlSpecies => {
        this.speciesService.getSpeciesByUrl(urlSpecies).subscribe(dataSpecies => {
          this.species.push(dataSpecies)
        })
      })

      // Obtenemos los vehículos
      this.film.vehicles.forEach(urlVehicles => {
        this.vehiclesService.getVehiclesByUrl(urlVehicles).subscribe(dataVehicles => {
          this.vehicles.push(dataVehicles)
        })
      })

      // Obtenemos las naves estelares
      this.film.starships.forEach(urlStarships => {
        this.starshipsService.getStarshipsByUrl(urlStarships).subscribe(dataStarships => {
          this.starships.push(dataStarships)
        })
      })

    });
  }

  otherPage(_nextId: number) {
    if (_nextId > 0 && _nextId < 7) {
      this.idFilm = _nextId;
      this.router.navigate(['film/', this.idFilm]);
      this.getData();
    }
  }

}
