import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contacto } from 'src/app/models/contactoModel';

@Component({
    selector: 'app-contacto',
    templateUrl: './contacto.component.html',
    styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

    contactoForm:   FormGroup;

    regexMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    regexTelefono = /[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-\s]){3}|(\d{2}[\*\.\-\s]){4}|(\d{4}[\*\.\-\s]){2})|\d{8}|\d{10}|\d{12}/
    regexWeb = /^(http:\/\/|https:\/\/)?(www.)?([a-zA-Z0-9]+).[a-zA-Z0-9]*.[‌​a-z]{3}\.([a-z]+)?$/

    constructor(private fb:FormBuilder) {
        this.contactoForm = this.fb.group({
            nombres: ['', Validators.required],
            apellidos: ['', Validators.required],
            correo: ['', [Validators.required,Validators.pattern("regexMail")]],
            telefono: ['', [Validators.required,Validators.pattern("regexTelefono")]],
            nombreEmp: ['', Validators.required],
            sitioEmp: ['', [Validators.required,Validators.pattern("regexWeb")]],
            tipoEmp: ['', Validators.required],
            categoriaEmp: ['', Validators.required],
            softErpBox: ['', Validators.required],
            gestPersoBox: ['', Validators.required],
            gestAusBox: ['', Validators.required],
            ProceRhBox: ['', Validators.required],
            otroBox: ['', Validators.required],

        })

    }

    ngOnInit(): void {
    }

    mandarMensaje(){
        const CONTACTO: Contacto = {
            nombres: this.contactoForm.get('nombres')?.value,
            apellidos: this.contactoForm.get('apellidos')?.value,
            correo: this.contactoForm.get('correo')?.value,
            telefono: this.contactoForm.get('telefono')?.value,
            nombreEmp: this.contactoForm.get('nombreEmp')?.value,
            sitioEmp: this.contactoForm.get('sitioEmp')?.value,
            tipoEmp: this.contactoForm.get('tipoEmp')?.value,
            categoriaEmp: this.contactoForm.get('categoriaEmp')?.value,
            softErpBox: this.contactoForm.get('softErpBox')?.value,
            gestPersoBox: this.contactoForm.get('gestPersoBox')?.value,
            gestAusBox: this.contactoForm.get('gestAusBox')?.value,
            ProceRhBox: this.contactoForm.get('ProceRhBox')?.value,
            otroBox: this.contactoForm.get('otroBox')?.value

            //verifier si argument du get est le meme que celui de la variable en debut de ligne?
        }
        console.log(CONTACTO);



    }

}
