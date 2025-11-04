/* ng g i nombreInterfaz */
/* ng generate interface nombreInterfaz */

/* Interfaz de Tarjeta -> estructurada esperada con su tipo de dato */
export interface Tarjeta {
    id: number; // acepta números como letras -> ej.: 123AB / 123 / ABC
    img: string;
    alt: string;
    titulo: string;
    descripcion: string;
    anualPublicacion: number; // acepta SOLO números -> ej.: 1, 2020, 1234
    fechaExacta?: Date;
}
