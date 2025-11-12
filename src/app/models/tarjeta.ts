/* 
    ng g i nombreInterfaz
    ng generate interface nombreInterfaz

    Interfaz: Modelo de clases u objetos, donde se definen las propiedades 
    (características) y que nos permiten estructurarlas con sus tipos

    TIPOS:
        - string: alfanuméricos
        - number: numéricos
        - boolean: booleanos
        - Date: tipo de fecha
*/

export interface Tarjeta {
    id: number | string; // "|" <- "o": ID puede ser NUMBER o STRING
    titulo: string; // string <- valores alfanumericos (letras y números)
    descripcion: string;
    precio: number; // number <- valores numéricos
    fechaPostal?: Date;
    img?: string;
    alt?: string; // ? <- indica que no es una propiedad obligatoria
}
