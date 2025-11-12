import { Component } from '@angular/core';
import { Tarjeta } from '../../../../models/tarjeta';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

/* 
  FormGroup: Directiva de formularios que agrupa una serie de datos
  FormControl: Utilizada en conjunto con FormGroup para tomar el valor de 
  una propiedad individual en un formulario
  ReactiveFormsModule: Activa el uso de formularios reactivos -> se ejecutan mediante 
  una acción y se relaciona HTML (interfaz gráfica) con TS (lógica)
  Validators: Pide o requiere que un valor exista o sea validado como necesario
*/

@Component({
  selector: 'app-new-product',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './new-product.html',
  styleUrl: './new-product.css'
})
export class NewProduct {
  /*
    Propiedades ESTRICTAMENTE requeridas -> Validators.required
    Propiedades opcionales -> no lo llevan
  */
  formularioTarjeta = new FormGroup({
    titulo: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    precio: new FormControl(null, Validators.required),
    img: new FormControl(''),
    alt: new FormControl('')
  });

  /*
    Coleccionar productos de tipo TARJETA (respeta la estructura de la interfaz)
    Funciona como arreglo ("[]"), se inicializa vacío
  */
  coleccionTarjetas: Tarjeta[] = [];

  /* Propiedad PRIVADA para manejar información sensible */
  private contadorId = 1;

  /**
   * @description Método para la creación de tarjetas según formulario reactivo:
   * "formularioTarjeta"
   * - Condicional se ejecuta si el formulario es válido
   * - Agregar nuevaTarjeta a coleccionTarjetas
   */
  crearTarjeta(){
    if (this.formularioTarjeta.valid){
      const nuevaTarjeta: Tarjeta = {
        /* ID: Único valor que lo asignamos previamente -> AUTO INCREMENTABLE */
        id: this.contadorId++,
        /* Resto de propiedades toman el VALOR de cada dato definido dentro del formulario */
        titulo: this.formularioTarjeta.value.titulo!,
        descripcion: this.formularioTarjeta.value.descripcion!,
        precio: this.formularioTarjeta.value.precio!
      }

      /* Enviar con método "push" la constante "nuevaTarjeta" */
      this.coleccionTarjetas.push(nuevaTarjeta);

      console.log("Nueva tarjeta agregada: ", nuevaTarjeta);
      console.log("Estado de la colección actual: ", this.coleccionTarjetas);

      alert("¡Se creó tarjeta con éxito! \n"+ nuevaTarjeta.titulo);

      /* Reseteamos formulario -> vaciamos casillero */
      this.formularioTarjeta.reset();
    }
  }
}
