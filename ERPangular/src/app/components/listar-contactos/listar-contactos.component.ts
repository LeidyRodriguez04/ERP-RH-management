import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListarContactos } from "../../models/listarContactosModelo";
// ES6 Modules or TypeScript
// import Swal from 'sweetalert2';


@Component({
  selector: 'app-listar-contactos',
  templateUrl: './listar-contactos.component.html',
  styleUrls: ['./listar-contactos.component.css']
})
export class ListarContactosComponent implements OnInit {

  listarContactosForm: FormGroup;

  regexCorreo = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
  regexTelefono = /[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-\s]){3}|(\d{2}[\*\.\-\s]){4}|(\d{4}[\*\.\-\s]){2})|\d{8}|\d{10}|\d{12}/;
  regexWeb = /^(http:\/\/|https:\/\/)?(www.)?([a-zA-Z0-9]+).[a-zA-Z0-9]*.[‌​a-z]{3}\.([a-z]+)?$/
  arrayUser: any = [] //array vide pour recevoir les checkbox selectionnées

  
  constructor(private fb: FormBuilder) {
    this.listarContactosForm = this.fb.group({
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

}
