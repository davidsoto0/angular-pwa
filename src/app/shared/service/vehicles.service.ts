import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IResult } from '../model/result.model';
import { IVehicle } from '../model/vehicles.model';


@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  urlBase: string = "http://swapi.dev/api/vehicles/"

  constructor(private http: HttpClient) { }

  getAllVehicles(_page: number): Observable<IResult<IVehicle>> {
    return this.http.get<IResult<IVehicle>>(this.urlBase + '?page=' + _page).pipe();
  }

  getVehicle(specie: number): Observable<IVehicle> {
    return this.http.get<IVehicle>(this.urlBase + specie).pipe();
  }

  getVehiclesByUrl(url: string): Observable<IVehicle> {
    return this.http.get<IVehicle>(url).pipe();
  }


}
