import { Component, OnInit } from '@angular/core';
import { IResult } from 'src/app/shared/model/result.model';
import { IVehicle } from 'src/app/shared/model/vehicles.model';
import { VehiclesService } from 'src/app/shared/service/vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicles: IVehicle[] = [];
  result: IResult<IVehicle>;
  page: number = 1;

  constructor(
    private vehiclesService: VehiclesService
  ) { }

  ngOnInit(): void {
    // Listado de personajes
    this.getData();
  }

  getData() {
    this.vehicles = [];
    this.vehiclesService.getAllVehicles(this.page).subscribe(data => {
      this.result = data;
      this.vehicles = data.results;
    });
  }

  getVehicle(person: IVehicle) {
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
