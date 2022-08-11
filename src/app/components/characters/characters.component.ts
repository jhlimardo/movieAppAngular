import { Component, OnInit } from '@angular/core';
import { PeopleService } from "../../services/people.service";
import { ActivatedRoute, Params} from "@angular/router";
import { People } from "../../models/people";


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
  providers: [PeopleService]
})
export class CharactersComponent implements OnInit {
  peopleList: any[] = []; // Creo array vacio para los personajes
  mapArray: Map < String, Object > [] = [];

  constructor(private peopleService: PeopleService, private _activeRouter: ActivatedRoute ){
    console.log('Creado')
  }

  ngOnInit(): void {
    console.log("Inicializado");
    this.peopleService.getPeople() // Llamamos a la funcion para obtener la Api
      .subscribe(
        (response: any) => this.peopleList = response.results, console.log(this.peopleList),
        (error: any) => (console.log(error))
      )
  }

}
