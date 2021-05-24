import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPlanets } from '../model/planets.model';
import { IResult } from '../model/result.model';


@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  urlBase: string = "http://swapi.dev/api/planets/"

  constructor(private http: HttpClient) { }

  getAllPlanetsByPage(_page: number): Observable<IResult<IPlanets>> {
    return this.http.get<IResult<IPlanets>>(this.urlBase + '?page=' + _page).pipe()
  }

  getPlanet(planet: number): Observable<IPlanets> {
    return this.http.get<IPlanets>(this.urlBase + planet).pipe();
  }

  getPlanetByUrl(url: string): Observable<IPlanets> {
    return this.http.get<IPlanets>(url).pipe();
  }

}
