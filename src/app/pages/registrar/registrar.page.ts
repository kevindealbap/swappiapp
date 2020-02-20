import { Component, OnInit } from '@angular/core';
import * as Bcryptjs from "bcryptjs";
import { MethodApiServiceService } from '../../services/method-api-service.service';
import { NavController } from '@ionic/angular';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  //Variables del formulario
  name:string;
  celular:number;
  cedula:number;
  email:string;
  password:string;
  lastname:string;

  verifyStatus=null;
  //fin variables

  constructor(private _methodsApiRestService: MethodApiServiceService,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  sendRegistro(){
    var salt = Bcryptjs.genSaltSync(10);
    var hash = Bcryptjs.hashSync(this.password, salt);

    
    let datos={
      "names":this.name,
      "lastNames":this.lastname,
      "cellPhone": this.celular.toString(),
      "documentId":this.cedula.toString(),
      "email":this.email,
      "password":hash
    }
    this._methodsApiRestService.PostMethod('/user-registration',datos)
    .subscribe(
      response => {
        if(response) {
          localStorage.setItem('name', this.name);
          localStorage.setItem('lastName', this.lastname);
          localStorage.setItem('email', this.email);
          localStorage.setItem('cedula', this.cedula.toString());
          localStorage.setItem('celular', this.celular.toString());
          localStorage.setItem('idUser', response['id']);
          this.navCtrl.navigateRoot('/inicio');
        }else{
          
        }
      },
        error => {
          Swal.fire(
            'Evento de Aplicacion',
            'Error al crear Perfil',
            'error'
          )
          if (!error.ok) {
            
          }
        }
    );
  }


}
