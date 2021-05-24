import { Component, OnInit } from '@angular/core';
import { IPerson } from 'src/app/shared/model/person.model';
import { IResult } from 'src/app/shared/model/result.model';
import { PeopleService } from 'src/app/shared/service/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people: IPerson[] = [];
  result: IResult<IPerson>;
  page: number = 1;

  constructor(
    private peopleService: PeopleService
  ) { }

  ngOnInit(): void {
    // Listado de personajes
    this.getData();
  }

  getData() {
    this.people = [];
    this.peopleService.getAllPeople(this.page).subscribe(data => {
      this.result = data;
      this.people = data.results;
    });
  }

  getPerson(person: IPerson) {
    console.log(person);
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
