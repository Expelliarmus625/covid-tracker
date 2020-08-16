import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/countries/countries.component';

export const routes: Routes = [
    {path : '', component: HomeComponent},
    {path : 'countries', component: CountriesComponent},
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class RoutingModule { }
