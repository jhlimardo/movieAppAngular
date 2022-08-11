import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { MoviesComponent} from "./components/movies/movies.component";
import { CharactersComponent } from './components/characters/characters.component'; //Importo el modulo HttpClientModule para que funcione HttpClient
import { MoviesService} from "./services/movies.service";
import { PeopleService} from "./services/people.service";

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MoviesService,
    PeopleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
