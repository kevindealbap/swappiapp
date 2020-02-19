import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  name: string;
  lastname: string;
  celular: any;
  cedula: any;
  correo: string;
  fecha: any;
  estadocivil: any;

  constructor() { }

  ngOnInit() {

    this.name = localStorage.getItem('name') + ' ' + localStorage.getItem('lastName');
    this.correo = localStorage.getItem('email');
    this.cedula = localStorage.getItem('cedula');
    this.celular = localStorage.getItem('celular');
  }

  registrar() {
    /*let datos = {
      "names": this.name,
      "lastNames": this.lastname,
      "cellPhone": this.celular.toString(),
      "documentId": this.cedula.toString(),
      "email": this.email,
      "password": hash
    }*/

  }
}
