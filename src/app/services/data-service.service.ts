import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { GlobalDataSummary } from '../../models/global-data.model';

const headers = new HttpHeaders().set(
  'Access-Control-Allow-Origin',
  'http://localhost:4200/'
);
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private globalDataURL =
    'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/08-14-2020.csv';
  constructor(private http: HttpClient) {}

  getGlobalData() {
    return this.http.get(this.globalDataURL, { responseType: 'text' }).pipe(
      map((result) => {
        let data: GlobalDataSummary[] = [];
        let raw = {};
        //split csv file into rows
        let rows = result.split('\n');

        //remove column headers
        rows.splice(0, 1);
        rows.forEach((row) => {
          //split rows into columns
          let cols = row.split(/,(?=\S)/);
          let cs = {
            country: cols[3],
            confirmed: +cols[7],
            active: +cols[10],
            recovered: +cols[9],
            deaths: +cols[8],
          };

          //merge rows belonging to the same countries
          let temp: GlobalDataSummary = raw[cs.country];
          if (temp) {
            temp.active += cs.active;
            temp.confirmed += cs.confirmed;
            temp.deaths += cs.deaths;
            temp.recovered += cs.recovered;

            raw[cs.country] = temp;
          } else {
            raw[cs.country] = cs;
          }
        });
        // console.log(raw);

        //return data grouped according to country
        return <GlobalDataSummary[]>Object.values(raw);
      })
    );
  }
}
