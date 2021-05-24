import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IResult } from '../model/result.model';
import { IPerson } from '../model/person.model';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  urlBase: string = "http://swapi.dev/api/people/"

  constructor(private http: HttpClient) { }

  getAllPeople(_page: number): Observable<IResult<IPerson>> {
    return this.http.get<IResult<IPerson>>(this.urlBase + '?page=' + _page).pipe();
  }

  getPerson(person: number): Observable<IPerson> {
    return this.http.get<IPerson>(this.urlBase + person).pipe();
  }

  getPersonByUrl(url: string): Observable<IPerson> {
    return this.http.get<IPerson>(url).pipe();
  }


}
