import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IResult } from '../model/result.model';
import { IVehicle } from '../model/vehicles.model';
import { IStarship } from '../model/starships.model';


@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  urlBase: string = "http://swapi.dev/api/starships/"

  constructor(private http: HttpClient) { }

  getAllStarships(_page: number): Observable<IResult<IStarship>> {
    return this.http.get<IResult<IStarship>>(this.urlBase + '?page=' + _page).pipe();
  }

  getStarship(starship: number): Observable<IStarship> {
    return this.http.get<IStarship>(this.urlBase + starship).pipe();
  }

  getStarshipsByUrl(url: string): Observable<IStarship> {
    return this.http.get<IStarship>(url).pipe();
  }


}
