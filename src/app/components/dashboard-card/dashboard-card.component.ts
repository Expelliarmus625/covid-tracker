import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css'],
})
export class DashboardCardComponent implements OnInit {
  @Input('totalConfirmed') totalConfirmed;
  @Input('totalDeaths') totalDeaths;
  @Input('totalRecovered') totalRecovered;
  @Input('totalActive') totalActive;

  @Output() cardSelected = new EventEmitter<string>();

  constructor() {}

  onSelectCard(event: string) {
    this.cardSelected.emit(event);
  }

  ngOnInit(): void {}
}
