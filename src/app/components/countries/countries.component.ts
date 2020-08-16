import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service.service';
import { GlobalDataSummary } from 'src/models/global-data.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  data: GlobalDataSummary[];
  countryList: string[] = [];

  constructor(private dataService: DataService) {}

  totalConfirmed: number = 0;
  totalActive: number = 0;
  totalRecovered: number = 0;
  totalDeaths: number = 0;

  ngOnInit(): void {
    this.dataService.getGlobalData().subscribe((res) => {
      this.data = res;
      this.data.forEach((data) => this.countryList.push(data.country));
    });
  }

  onSelectCountry(country: string) {
    console.log(country);
    this.data.forEach((cs) => {
      if (cs.country === country) {
        this.totalConfirmed = cs.confirmed;
        this.totalActive = cs.active;
        this.totalRecovered = cs.recovered;
        this.totalDeaths = cs.deaths;
      }
    });
  }
}
