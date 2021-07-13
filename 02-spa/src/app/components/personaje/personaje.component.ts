import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PersonajesService } from '../../servicios/personajes.service';
import { StorageService } from '../../servicios/storage.service'

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
    private _activatedRoute: ActivatedRoute,
    private _storageService: StorageService
  ) {
    
    this._activatedRoute.params.subscribe(params => {
      this.personaje = this._personajesService.getPersonaje(params['id']);
      this.texto = this.personaje.actor;
    } )
  }

  ngOnInit(): void {
  }

  encristar(){
    // if(!this.estado){
    //   this.texto = this._storageService.encrypt(this.texto);
    // }else{
    //   this.texto = this._storageService.decrypt(this.texto);
    // }
    this.estado = !this.estado;
    
  }

  

  

}
