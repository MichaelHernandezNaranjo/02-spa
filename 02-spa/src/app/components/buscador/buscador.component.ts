import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PersonajesService } from '../../servicios/personajes.service';
import { Personaje } from '../shared/interfaces/personaje.interface';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  personajes: Personaje[] = [];
  termino: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _personajesService: PersonajesService
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.personajes = this._personajesService.buscarPersonajes(this.termino);
    })
  }

}
