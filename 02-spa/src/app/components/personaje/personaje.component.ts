import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PersonajesService } from '../../servicios/personajes.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  personaje: any = {};

  texto: string = "";
  estado: boolean = false;

  constructor(
    private _personajesService: PersonajesService,
    private _activatedRoute: ActivatedRoute
  ) {
    
    this._activatedRoute.params.subscribe(params => {
      this.personaje = this._personajesService.getPersonaje(params['id']);
      this.texto = this.personaje.actor;
    } )
  }

  ngOnInit(): void {
  }

  encristar(){
    this.estado = !this.estado;
  }

  

  

}
