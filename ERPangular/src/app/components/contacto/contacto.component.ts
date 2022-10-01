import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

}
