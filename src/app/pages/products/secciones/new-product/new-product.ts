import { Component } from '@angular/core';
import { Producto } from '../../../../models/producto';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
/* 
  FormControl = Controlador de cada dato ingresado en el formulario
  FormGroup = Directiva para formularios reactivos en Angular, agrupa FormControl
  ReactiveFormsModule = Permite hacer uso de formularios reactivos
  Validators = Valida datos ingresados en un formulario
*/

@Component({
  selector: 'app-new-product',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './new-product.html',
  styleUrl: './new-product.css'
})
export class NewProduct {
  // Propiedades PRIVADA -> información sensible
  private contadorId = 1;

  // Colección de productos de tipo PRODUCTO
  coleccionProductos: Producto[] = [];

  /*
    Instancia que se vincula con el formulario desde el HTML
    nombrePropiedad: new Control
      string -> '' / number -> null
      Validators.required -> validado como valor requerido estrictamente
  */
  nuevoProducto = new FormGroup ({
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    precio: new FormControl(null, Validators.required),
    // img: new FormControl(''),
    // alt: new FormControl('')
  });

  /**
   * @description Método de creación de productos según interfaz "Producto"
   */ 
  crearProducto(): void {
    if(this.nuevoProducto.valid){
      const nuevoProducto: Producto = {
        // id -> asignamos contador para que sea autoincrementable
        id: this.contadorId++,
        /*
          resto de propiedades, asignamos desde el formulario el valor
          que se recibió desde su casilla o formControlName
        */
        nombre: this.nuevoProducto.value.nombre!,
        descripcion: this.nuevoProducto.value.descripcion!,
        precio: this.nuevoProducto.value.precio!
      }

      /* Agregamos nuevo producto a colección de productos */
      this.coleccionProductos.push(nuevoProducto);

      alert("¡Se creo el nuevo producto con éxito! Nombre de producto: \n"+nuevoProducto.nombre)

      console.log("Producto agregado: ", nuevoProducto);
      console.log("Colección actual de productos: ", this.coleccionProductos);

      /* Reseteamos el formulario */
      this.nuevoProducto.reset();
    }
  }
}
