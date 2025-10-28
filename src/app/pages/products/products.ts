import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarjeta } from '../../models/tarjeta';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  /* 
    Propiedad PÚBLICA: libre acceso a su contenido
    Propiedad PRIVADA: contenido restringido
  */
  public infoTarjeta: Tarjeta[];

  /*
    Declaramos colección de tarjetas en base a modelo de interfaz "Tarjeta"
    - Se tiene que respetar el uso de todas las propiedades y su tipo
    - Tipo alfanumérico (string) inicializa en ""
    - Tipo numérico (number) inicializa en 0
  */

  constructor(){
    this.infoTarjeta = [
      {
        id: 1,
        img: "../../../assets/pexels-apasaric-2481670.jpg",
        alt: "Foto de paisaje en China",
        titulo: "Paisaje",
        descripcion: "Foto tomada en un paisaje chino",
        anualPublicacion: 2025
      },
      {
        id: 2,
        img: "../../../assets/pexels-magda-ehlers-pexels-2846034.jpg",
        alt: "Foto de estatua en China",
        titulo: "Estatua",
        descripcion: "Foto tomada a una estatua en China",
        anualPublicacion: 2024
      },
      {
        id: 3,
        img: "../../../assets/pexels-ruiyang-zhang-915467-3204950.jpg",
        alt: "Foto de templo en China",
        titulo: "Templo",
        descripcion: "Foto tomada a un templo chino",
        anualPublicacion: 2023
      },
      {
        id: 4,
        img: "../../../assets/pexels-zhangkaiyv-189833.jpg",
        alt: "Foto de paisaje chino",
        titulo: "Paisaje",
        descripcion: "Foto de paisaje sobre el agua",
        anualPublicacion: 2022
      }
    ]
  }

  /* Variable para tomar una tarjeta seleccionada */
  tarjetaSeleccionada: any = null;

  /* Recibe el elemento seleccionado por parámetro y lo asigna a "tarjetaSeleccionada" */
  verMas(tarjeta: any){
    this.tarjetaSeleccionada = tarjeta;
  }
}
