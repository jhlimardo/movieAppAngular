import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoviesComponent} from "./components/movies/movies.component";
import { CharactersComponent} from "./components/characters/characters.component";


const routes: Routes = [
  {path:'', component: MoviesComponent},
  {path: 'movies', component: MoviesComponent},
  {path:'people', component: CharactersComponent},
  {path: '**', component: MoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
