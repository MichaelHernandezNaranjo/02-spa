import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

import { PersonajesService } from '../../servicios/personajes.service';

import { Personaje } from '../shared/interfaces/personaje.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  personajes: Personaje[] = [];
  constructor(
    private _personajesService: PersonajesService,
    private _router:Router,
    private _activatedRoute: ActivatedRoute
  ) { }



  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this.personajes = this._personajesService.getPersonajes(params['id']);
    } )
  }
  verPersonaje(id: number) {
    this._router.navigate(['/personaje',id]);
  }

}
