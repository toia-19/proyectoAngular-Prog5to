import { Component } from '@angular/core';
import { Tarjeta } from '../../models/tarjeta';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [ CommonModule ],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  /*
    Propiedades en Angular -> variables
    Propiedad PÚBLICA: libre acceso a su contenido
    Propiedad PRIVADA: contenido restringido
  */
  public infoTarjeta: Tarjeta[];

  /* 
    Instanciar a la propiedad para poder hacer uso de ella

    Declaramos colección de tarjetas en base a modelo de interfaz "Tarjetas"
    - Se tiene que respetar el uso de todas las propiedades y su tipo
    - Tipo alfanumérico (string) inicializa en ""
    - Tipo numérico (number) inicializa en 0
  */
  constructor(){
    this.infoTarjeta = [
      {
        id: 1,
        titulo: "Border Collie",
        descripcion: "Foto de un border collie",
        precio: 2000,
        fechaPostal: new Date('2020-12-1'),
        img: "https://images.pexels.com/photos/28645781/pexels-photo-28645781.jpeg",
        alt: "Postal de un border collie",
      },
      {
        id: 2,
        titulo: "Golden Retriever",
        descripcion: "Foto de dos goldens",
        precio: 3500,
        fechaPostal: new Date('2025-12-1'),
        img: "../../../assets/pexels-chevanon-1108099.jpg",
        alt: "Postal de dos goldens"
      },
      {
        id: 3,
        titulo: "Pastor Aleman",
        descripcion: "Foto de pastor aleman",
        precio: 1500,
        fechaPostal: new Date('2024-8-12'),
        img: "https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg",
        alt: "Postal de pastor aleman"
      },
      {
        id: 4,
        titulo: "Perrito bebé",
        descripcion: "Foto de cachorro",
        precio: 5000,
        fechaPostal: new Date('2022-8-11'),
        img: "https://images.pexels.com/photos/59965/dog-young-dog-puppy-59965.jpeg",
        alt: "Postal de cachorro"
      },
    ]
  }
}
