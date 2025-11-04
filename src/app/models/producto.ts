/* 
    ng g i models/nombreInterfaz / ng generate interface models/nombreInterfaz
*/

export interface Producto {
    id: number; // ID <- tipo number para que pueda ser autoincrementable
    img?: string; // ? <- indica que no es una propiedad estrictamente obligatoria
    alt?: string;
    nombre: string;
    precio: number;
    descripcion: string;
}

export interface Indumentaria {
    id: number; // <- 1200
    nombre: string; // <- "Remera"
    fechaPublicacion: Date; // <- fechas: new Date('12-12-2025')
    activo: boolean; // <- true/ false
}
