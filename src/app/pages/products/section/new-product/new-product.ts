import { Component } from '@angular/core';
import { Tarjeta } from '../../../../models/tarjeta';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

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
  imports: [ReactiveFormsModule],
  templateUrl: './new-product.html',
  styleUrl: './new-product.css'
})
export class NewProduct {
  /*
    Propiedades ESTRICTAMENTE requeridas -> Validators.required
    Propiedades opcionales -> no lo llevan
  */
  nuevoProducto = new FormGroup({
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
  coleccionProductos: Tarjeta[] = [];

  /* Propiedad PRIVADA para manejar información sensible */
  private contadorId = 1;

  /**
   * @description
   */
  crearTarjeta(){}
}
