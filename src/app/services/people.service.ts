import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"; // Inyectamos el servicio HttpClient para conectar con la API


@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient, ) {
    console.log('HTTP service running:');
  }

  getPeople(): any { //Creo funcion asincrona para obtener la respuesta de la api
    return this.http.get(`https://swapi.dev/api/people/`);
  }
}
