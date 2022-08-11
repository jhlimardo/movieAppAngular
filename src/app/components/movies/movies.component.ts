import { Component, OnInit } from '@angular/core';
import { MoviesService} from "../../services/movies.service";
import { Movie } from "../../models/movies";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MoviesService]
})
export class MoviesComponent implements OnInit {

  movieList: any[] = []; // Creo array vacio para las movies

  constructor(private movieService: MoviesService ){
    console.log('Creado')
  }
  // implementamos el metodo ngOnInit para que no de error
  ngOnInit(): void{
    console.log("Inicializado");
    this.movieService.getMovies() // Llamamos a la funcion para obtener la Api
      .subscribe((response: any) => this.movieList = response.results, console.log(this.movieList))
    console.log("Movies", this.movieList)// pongo las movies en el array
  }
}
