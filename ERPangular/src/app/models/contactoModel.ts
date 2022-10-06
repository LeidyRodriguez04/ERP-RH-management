

export class Contacto{
    _id?: string;
    nombres : string;
    apellidos : string;
    correo : string;
    telefono : number;
    nombreEmp : string;
    sitioEmp : string;
    tipoEmp : string;
    categoriaEmp : string;
    softErpBox : string;
    gestPersoBox : string;
    gestAusBox : string;
    ProceRhBox : string;
    otroBox :  string;
    mensajeBox : string

    constructor(nombres : string, apellidos : string, correo : string, telefono : number, nombreEmp : string, sitioEmp : string, tipoEmp : string, categoriaEmp : string, softErpBox : string, gestPersoBox : string, gestAusBox : string, ProceRhBox : string, otroBox :  string, mensajeBox : string){
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.correo = correo;
        this.telefono = telefono;
        this.nombreEmp = nombreEmp;
        this.sitioEmp = sitioEmp;
        this.tipoEmp = tipoEmp;
        this.categoriaEmp = categoriaEmp;
        this.softErpBox = softErpBox;
        this.gestPersoBox = gestPersoBox;
        this.gestAusBox = gestAusBox;
        this.ProceRhBox = ProceRhBox;
        this.otroBox = otroBox;
        this.mensajeBox = mensajeBox

    }



}
