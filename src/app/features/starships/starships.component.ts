import { Component, OnInit } from '@angular/core';
import { IResult } from 'src/app/shared/model/result.model';
import { IStarship } from 'src/app/shared/model/starships.model';
import { StarshipsService } from 'src/app/shared/service/starships.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  starships: IStarship[] = [];
  result: IResult<IStarship>;
  page: number = 1;

  constructor(
    private starshipsService: StarshipsService

  ) { }

  ngOnInit(): void {
    // Listado de personajes
    this.getData();
  }

  getData() {
    this.starships = [];
    this.starshipsService.getAllStarships(this.page).subscribe(data => {
      this.result = data;
      this.starships = data.results;
    });
  }

  getStarship(starship: IStarship) {
    console.log(starship);
  }

  otherPage(_page: number) {
    if ((_page > this.page) && this.result.next) {
      this.page = _page;
      this.getData();

    } else if ((_page < this.page) && this.result.previous) {
      this.page = _page;
      this.getData();
    }

  }
}
