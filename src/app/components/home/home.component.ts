import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service.service';
import { GlobalDataSummary } from 'src/models/global-data.model';
import { GoogleChartInterface } from 'ng2-google-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private dataService: DataService) {}
  totalConfirmed = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  totalActive = 0;
  globalData: GlobalDataSummary[];

  pieChart: GoogleChartInterface = {
    chartType: 'PieChart',
  };
  columnChart: GoogleChartInterface = {
    chartType: 'ColumnChart',
  };

  initChart() {
    let dataTable = [];
    dataTable.push(['Country', 'Cases']);
    this.globalData.forEach((cs) => {
      if (cs.confirmed > 500000) dataTable.push([cs.country, cs.confirmed]);
    });
    console.log(dataTable);
    this.pieChart = {
      chartType: 'PieChart',
      dataTable: dataTable,
      options: { height: 500 },
    };
    this.columnChart = {
      chartType: 'ColumnChart',
      dataTable: dataTable,
      options: { height: 500 },
    };
  }
  ngOnInit(): void {
    this.dataService.getGlobalData().subscribe({
      next: (result) => {
        this.globalData = result;
        result.forEach((cs) => {
          if (!Number.isNaN(cs.confirmed)) {
            this.totalActive += cs.active;
            this.totalConfirmed += cs.confirmed;
            this.totalRecovered += cs.recovered;
            this.totalDeaths += cs.deaths;
          }
        });
        this.initChart();
      },
    });
  }

  changeData(event) {
    let dataTable = [];
    dataTable.push(['Country', 'Cases']);
    this.globalData.forEach((cs) => {
      if (cs.confirmed > 500000) dataTable.push([cs.country, cs[event]]);
    });
    console.log(dataTable);
    this.pieChart = {
      chartType: 'PieChart',
      dataTable: dataTable,
      options: { height: 500 },
    };
    this.columnChart = {
      chartType: 'ColumnChart',
      dataTable: dataTable,
      options: { height: 500 },
    };
  }
}
