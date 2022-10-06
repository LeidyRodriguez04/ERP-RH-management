export class Personal {
    _id?: string;
    nombre: string;
    apellido: string;
    edad: string;
    sexo: number;

    constructor(nombre: string, apellido: string, edad: string, sexo: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sexo = sexo;
    }
}