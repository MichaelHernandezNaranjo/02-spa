import { Injectable } from '@angular/core';
import { Personaje } from '../components/shared/interfaces/personaje.interface';

@Injectable()
export class PersonajesService{

  private personajes: Personaje[] = [
    {
      id: 1,
      nombre: "Thanos",
      bio: "Thanos de titan es un megavillano ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics. Creado por el escritor y artista Jim Starlin el personaje apareció por primera vez en The Invincible Iron Man # 55.",
      img: "assets/img/thanos.jpg",
      aparicion: "1973-02-01",
      casa:"Marvel",
      tipo: "villano"
    },
    {
      id: 2,
      nombre: "Loki",
      bio: "Loki es un supervillano ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics. Creado por el escritor Stan Lee, el guionista Larry Lieber y el dibujante Jack Kirby, una versión del personaje apareció por primera vez en Venus #6.",
      img: "assets/img/loki.jpg",
      aparicion: "1962-10-01",
      casa:"Marvel",
      tipo: "villano"
    },
    {
      id: 3,
      nombre: "Joker",
      bio: "Loki es un supervillano ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics. Creado por el escritor Stan Lee, el guionista Larry Lieber y el dibujante Jack Kirby, una versión del personaje apareció por primera vez en Venus #6.",
      img: "assets/img/joker.jpg",
      aparicion: "1962-10-01",
      casa:"DC",
      tipo: "villano"
    },
    {
      id: 4,
      nombre: "Aquaman",
      bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
      img: "assets/img/aquaman.png",
      aparicion: "1941-11-01",
      casa:"DC",
      tipo: "heroe"
    },
    {
      id: 5,
      nombre: "Batman",
      bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
      img: "assets/img/batman.png",
      aparicion: "1939-05-01",
      casa:"DC",
      tipo: "heroe"
    },
    {
      id: 6,
      nombre: "Daredevil",
      bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
      img: "assets/img/daredevil.png",
      aparicion: "1964-01-01",
      casa: "Marvel",
      tipo: "heroe"
    },
    {
      id: 7,
      nombre: "Hulk",
      bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
      img: "assets/img/hulk.png",
      aparicion: "1962-05-01",
      casa:"Marvel",
      tipo: "heroe"
    },
    {
      id: 8,
      nombre: "Linterna Verde",
      bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
      img: "assets/img/linterna-verde.png",
      aparicion: "1940-06-01",
      casa: "DC",
      tipo: "heroe"
    },
    {
      id: 9,
      nombre: "Spider-Man",
      bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
      img: "assets/img/spiderman.png",
      aparicion: "1962-08-01",
      casa: "Marvel",
      tipo: "heroe"
    },
    {
      id: 10,
      nombre: "Wolverine",
      bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
      img: "assets/img/wolverine.png",
      aparicion: "1974-11-01",
      casa: "Marvel",
      tipo: "heroe"
    }
  ];

  constructor() {
    console.log("Servicio Arriba!!!");
  }
  getPersonajes(tipo: string): Personaje[]{
    return this.personajes.filter(x=>x.tipo == tipo);
  }
  getPersonaje(idx: number) {
    return this.personajes.filter(x=>x.id == idx)[0];
  }
  buscarPersonajes(termino: string):Personaje[]{
    let personajesArr: Personaje[] = [];
    termino = termino.toLowerCase();

    for (let index = 0; index < this.personajes.length; index++) {
      let personaje = this.personajes[index];

      let nombre = personaje.nombre.toLowerCase();

       // batman  == b
      if (nombre.indexOf(termino) >= 0) {
        personajesArr.push(personaje);
      }
    }
    return personajesArr;
  }

}
