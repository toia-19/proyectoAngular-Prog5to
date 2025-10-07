/* ng g i nombreInterfaz */
/* ng generate interface nombreInterfaz */

/* Interfaz de Tarjeta -> estructurada esperada con su tipo de dato */
export interface Tarjeta {
    id: string; // números como letras -> ej.: 123AB / 123 / ABC
    img: string;
    alt: string;
    titulo: string;
    descripcion: string;
    anualPublicacion: number;
}
