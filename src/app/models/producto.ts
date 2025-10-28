export interface Producto {
    id: number; // ID <- tipo number para que pueda ser autoincrementable
    img: string;
    alt: string;
    nombre: string;
    precio: number;
    descripcion: string;
}
