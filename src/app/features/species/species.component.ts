import { Component, OnInit } from '@angular/core';
import { IResult } from 'src/app/shared/model/result.model';
import { ISpecie } from 'src/app/shared/model/species.model';
import { SpeciesService } from 'src/app/shared/service/species.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  species: ISpecie[] = [];
  result: IResult<ISpecie>;
  page: number = 1;

  constructor(
    private speciesService: SpeciesService
  ) { }

  ngOnInit(): void {
    // Listado de personajes
    this.getData();
  }

  getData() {
    this.species = [];
    this.speciesService.getAllSpecies(this.page).subscribe(data => {
      this.result = data;
      this.species = data.results;
    });
  }

  getSpecie(specie: ISpecie) {
    console.log(specie);
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
