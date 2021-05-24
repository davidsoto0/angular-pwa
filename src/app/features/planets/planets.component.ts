import { Component, OnInit } from '@angular/core';
import { IPlanets } from 'src/app/shared/model/planets.model';
import { IResult } from 'src/app/shared/model/result.model';
import { PlanetsService } from 'src/app/shared/service/planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planets: IPlanets[] = [];
  result: IResult<IPlanets>;
  page: number = 1;

  constructor(
    private planetsService: PlanetsService
  ) {
  }

  ngOnInit(): void {
    // Listado de planetas
    this.getData();
  }

  getData() {
    this.planets = [];
    this.planetsService.getAllPlanetsByPage(this.page).subscribe(data => {
      console.log(data)
      this.result = data;
      this.planets = data.results;
    });
  }

  getPlanet(planet: IPlanets) {
    console.log(planet)
  }

  otherPage(_page: number) {
    if (_page <= 6 && _page >= 1) {
      this.page = _page
      this.getData();

    }

  }

}
