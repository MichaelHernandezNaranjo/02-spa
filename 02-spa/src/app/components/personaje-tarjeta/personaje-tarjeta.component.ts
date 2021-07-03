import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-personaje-tarjeta',
  templateUrl: './personaje-tarjeta.component.html',
  styleUrls: ['./personaje-tarjeta.component.css']
})
export class PersonajeTarjetaComponent implements OnInit {

  @Input() personaje: any = { };

  constructor(
    private _router:Router
  ) { }

  ngOnInit(): void {
  }
  verPersonaje(id: number) {
    this._router.navigate(['/personaje',this.personaje.id]);
  }

}
