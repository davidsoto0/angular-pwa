import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IResult } from '../model/result.model';
import { ISpecie } from '../model/species.model';


@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  urlBase: string = "http://swapi.dev/api/species/"

  constructor(private http: HttpClient) { }

  getAllSpecies(_page: number): Observable<IResult<ISpecie>> {
    return this.http.get<IResult<ISpecie>>(this.urlBase + '?page=' + _page).pipe();
  }

  getSpecie(specie: number): Observable<ISpecie> {
    return this.http.get<ISpecie>(this.urlBase + specie).pipe();
  }

  getSpeciesByUrl(url: string): Observable<ISpecie> {
    return this.http.get<ISpecie>(url).pipe();
  }


}
