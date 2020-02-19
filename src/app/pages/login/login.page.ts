import { Component, OnInit } from '@angular/core';
import * as Bcryptjs from "bcryptjs";
import { NavController } from '@ionic/angular';
import { MethodApiServiceService } from '../../services/method-api-service.service';
import swal from 'sweetalert2';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  cedula:number;
  password:any;
  datos=null;
  passcrypt : any;
estado : any;

  constructor(private _methodsApiRestService: MethodApiServiceService,
    public navCtrl: NavController) { }

  ngOnInit() {
    var id=localStorage.getItem('cedula');
    //console.log(id);
    if(id!="null" && id!=null){
      this.navCtrl.navigateRoot('/inicio');
    }

    
    
    
  }




  login(endpoint,params){



    this._methodsApiRestService.PostXHTML(endpoint,params)
      .subscribe(
        response => {
        /* this.estado = response[0]['enable'];
 */          
        /*   if(typeof response[0] === 'undefined' || response[0] === null){
            swal.fire("Ups!", "Usuario no encontrado", "error");
          } */
          
/*          if() {
              swal.fire("Ups!", "Contraseña vacia", "error");
            } */
            if(response !== null) {
              localStorage.setItem('name', response['names']);
              localStorage.setItem('lastNames', response['lastNames']);
              localStorage.setItem('email', response['email']);
              localStorage.setItem('cedula', response['documentId']);
              localStorage.setItem('celular', response['cellphone']);
              this.navCtrl.navigateRoot('/inicio');
            }else{
              swal.fire("Ups!", "Contraseña Incorrecta", "error");
            }
          },
          
          error => {
            if (!error.ok) {
              swal.fire("Ups!", error, "error");
            }
          }
      );
  }

  sendLogin(){
    var salt = Bcryptjs.genSaltSync(10);

    var cedulaUser = this.cedula.toString()+ ":" + this.password.toString();
    var passscrypt = btoa(cedulaUser);
    console.log(cedulaUser);
    console.log(passscrypt);
    let datos={
      "documentId": this.cedula,
      "password": passscrypt,     
    }
    this.login('/found-user',datos);
  }

}
