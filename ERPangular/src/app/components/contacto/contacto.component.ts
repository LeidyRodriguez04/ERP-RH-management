import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contacto } from '../../models/contactoModel';

@Component({
    selector: 'app-contacto',
    templateUrl: './contacto.component.html',
    styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

    contactoForm: FormGroup;

    regexCorreo = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    regexTelefono = /[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-\s]){3}|(\d{2}[\*\.\-\s]){4}|(\d{4}[\*\.\-\s]){2})|\d{8}|\d{10}|\d{12}/;
    regexWeb = /^(http:\/\/|https:\/\/)?(www.)?([a-zA-Z0-9]+).[a-zA-Z0-9]*.[‌​a-z]{3}\.([a-z]+)?$/
    arrayBox: any = []
    constructor(private fb: FormBuilder) {

        // eso es para hacer existir los elementos
        this.contactoForm = this.fb.group({
            nombres: ['', Validators.required],
            apellidos: ['', Validators.required],
            correo: ['', [Validators.required, Validators.pattern(this.regexCorreo)]],
            telefono: ['', [Validators.required, Validators.pattern(this.regexTelefono)]],
            nombreEmp: ['', Validators.required],
            sitioEmp: ['', [Validators.required, Validators.pattern(this.regexWeb)]],
            tipoEmp: ['', Validators.required],
            categoriaEmp: ['', Validators.required],
            softErpBox: [''],
            gestPersoBox: [''],
            gestAusBox: [''],
            ProceRhBox: [''],
            ventajasBox: [''],
            otroBox: [''],
            mensajeBox: ['', Validators.required]
        });


    }

    ngOnInit(): void {
    }

    mandarMensaje() {
        console.log(this.contactoForm)
        // eso es para colocar una key y el valor correspondiente
        const List_data_box = [
            { key: 'softErpBox', valueii: 'software ERP de recurso humano' },
            { key: 'gestPersoBox', valueii: 'Gestion administrativa' },
            { key: 'gestAusBox', valueii: 'Gestion de ausencias' },
            { key: 'ProceRhBox', valueii: 'Automatizacion de proceso de recurso humano' },
            { key: 'ventajasBox', valueii: 'Ventajas y remuneraciones' },
            { key: 'otroBox', valueii: 'Otros' }
        ]


        // eso es para recuperar los valores de cada elementos seleccionado
        for (const pepe of List_data_box) {
            if (this.contactoForm.get(pepe.key)?.value == true) {
                this.arrayBox.push(pepe.valueii)
            }
        }
        console.log(this.arrayBox)


        // eso es para mandar todo a la base de datos
        const CONTACTO: Contacto = {
            nombres: this.contactoForm.get('nombres')?.value,
            apellidos: this.contactoForm.get('apellidos')?.value,
            correo: this.contactoForm.get('correo')?.value,
            telefono: this.contactoForm.get('telefono')?.value,
            nombreEmp: this.contactoForm.get('nombreEmp')?.value,
            sitioEmp: this.contactoForm.get('sitioEmp')?.value,
            tipoEmp: this.contactoForm.get('tipoEmp')?.value,
            categoriaEmp: this.contactoForm.get('categoriaEmp')?.value,
            arrayUsuario: this.arrayBox,
            mensajeBox: this.contactoForm.get("mensajeBox")?.value

        }

        console.log(CONTACTO);


    }

}
