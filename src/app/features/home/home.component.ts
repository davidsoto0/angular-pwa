import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IFilm } from 'src/app/shared/model/films.model';
import { FilmsService } from 'src/app/shared/service/films.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  films: IFilm[] = [];

  constructor(
    private filmsService: FilmsService,
    private router: Router
  ) { }

  ngOnInit(): void {

    // Listado de películas
    this.filmsService.getAllFilms().subscribe(data => {

      this.films = data.results;
    })

  }

  getFilm(index: number) {
    this.router.navigate(['film/', index]);
  }
}
