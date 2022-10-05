import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contacto } from '../../models/contactoModel';

@Component({
    selector: 'app-contacto',
    templateUrl: './contacto.component.html',
    styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

    contactoForm:FormGroup;

    regexCorreo = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    regexTelefono = /[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-\s]){3}|(\d{2}[\*\.\-\s]){4}|(\d{4}[\*\.\-\s]){2})|\d{8}|\d{10}|\d{12}/;
    regexWeb = /^(http:\/\/|https:\/\/)?(www.)?([a-zA-Z0-9]+).[a-zA-Z0-9]*.[‌​a-z]{3}\.([a-z]+)?$/
    arrayBox = []
    constructor(private fb:FormBuilder) {

        this.contactoForm = this.fb.group({
            nombres: ['', Validators.required],
            apellidos: ['', Validators.required],
            correo: ['',[Validators.required, Validators.pattern(this.regexCorreo)]],
            telefono: ['', [Validators.required,Validators.pattern(this.regexTelefono)]],
            nombreEmp: ['', Validators.required],
            sitioEmp: ['', [Validators.required,Validators.pattern(this.regexWeb)]],
            tipoEmp: ['', Validators.required],
            categoriaEmp: ['', Validators.required],
            arrayUsuario: [''],
            mensajeBox: ['', Validators.required]
        });


    }

    ngOnInit(): void {
    }

    mandarMensaje(){
console.log(this.contactoForm)

const List_data_box = [
    {key: 'softErpBox', value: 'software ERP de recurso humano'},
    {key: 'gestPersoBox', value: 'Gestion administrativa'},
    {key: 'gestAusBox', value: 'Gestion de ausencias'},
    {key: 'ProceRhBox', value: 'Automatizacion de proceso de recurso humano'},
    {key: 'ventajasBox', value: 'Ventajas y remuneraciones'},
    {key: 'otroBox', value: 'Otros'}
]
// faire un for each afin de reduire le ,nombre de lignes en ne recuperant que les arguments contenu dans un array

List_data_box.forEach(key => {
    (this.contactoForm.get(List_data_box)?.value == "true"){
        this.arrayBox.push(List_data_box.value)
    }
});
// List_data_box.forEach(key => {
//     this.contactoForm.get(List_data_box)?.value == "true"
//     this.arrayBox.push(List_data_box.value)
// })
// this.contactoForm.get(Lista_data_box).forEach(key?.value == "true" => {
//     this.arrayBox.push(Lista_data_box.value)
// });

// if(this.contactoForm.get('softErpBox')?.value == "true"){
//     this.arrayBox.push("erp")
// }
        const CONTACTO: Contacto = {
            nombres: this.contactoForm.get('nombres')?.value,
            apellidos: this.contactoForm.get('apellidos')?.value,
            correo: this.contactoForm.get('correo')?.value,
            telefono: this.contactoForm.get('telefono')?.value,
            nombreEmp: this.contactoForm.get('nombreEmp')?.value,
            sitioEmp: this.contactoForm.get('sitioEmp')?.value,
            tipoEmp: this.contactoForm.get('tipoEmp')?.value,
            categoriaEmp: this.contactoForm.get('categoriaEmp')?.value,
            arrayUsuario: this.arrayBox

        }

        console.log(CONTACTO);


    }

}
