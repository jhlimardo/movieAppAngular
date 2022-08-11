import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"; // Inyectamos el servicio HttpClient para conectar con la API


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) {
    console.log('HTTP service running:');
  }

  getMovies(): any { //Creo funcion asincrona para obtener la respuesta de la api
    return this.http.get('https://swapi.dev/api/films/');
  }
}
