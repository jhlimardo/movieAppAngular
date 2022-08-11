import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { MoviesService} from "../../services/movies.service";
import { PeopleService} from "../../services/people.service";
import { Movie } from "../../models/movies";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MoviesService]
})
export class MoviesComponent implements OnInit {
  @Output() selectedParams = new EventEmitter<any>()
  movieList: any[] = []; // Creo array vacio para las movies

  selectedMovie?: Movie
  onSelect(movie: Movie) : void {
    this.selectedMovie = movie
    console.log("Movie: ", movie)
    alert(movie.opening_crawl);
  }




  constructor(private movieService: MoviesService, private peopleService: PeopleService ){
    console.log('Creado')
  }
  // implementamos el metodo ngOnInit para que no de error
  ngOnInit(): void{
    console.log("Inicializado");
    this.movieService.getMovies() // Llamamos a la funcion para obtener la Api
      .subscribe((response: any) => this.movieList = response.results,
        (error: any) => (console.log(error))
      )




  }

  // movieDetail(){
  //   const PARAMS = {
  //     id: this.selectedMovie,
  //   }
  //   this.selectedParams.emit(PARAMS)
  // }


}
