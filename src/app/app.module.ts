// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/countries/countries.component';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CountriesComponent,
    DashboardCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    MaterialModule,
    HttpClientModule,
    Ng2GoogleChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
