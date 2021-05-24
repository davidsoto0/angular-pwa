import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IResult } from '../model/result.model';
import { IFilm } from '../model/films.model';


@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  urlBase: string = "http://swapi.dev/api/films/"

  constructor(private http: HttpClient) { }

  getAllFilms(): Observable<IResult<IFilm>> {
    return this.http.get<IResult<IFilm>>(this.urlBase).pipe();
  }

  getFilm(film: number): Observable<IFilm> {
    return this.http.get<IFilm>(this.urlBase + film).pipe();
  }



}
