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
  terminos : any;
  verifyStatus=null;
  termsAgree : any;
  //fin variables

  constructor(private _methodsApiRestService: MethodApiServiceService,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  sendRegistro($event){
    var salt = Bcryptjs.genSaltSync(10);
    var hash = Bcryptjs.hashSync(this.password, salt);
   



if(this.termsAgree == null || this.termsAgree == undefined){
  Swal.fire("Atencion", "Para continuar debe aceptar los terminos",'warning')
}
var check =this.termsAgree.toString();
console.log(check);
    if(this.termsAgree == true){
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
    }else{
      Swal.fire("Atencion", "Para continuar debe aceptar los terminos",'warning')
      
    }






  
    
 
   
  }


}
