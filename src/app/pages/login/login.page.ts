import { Component, OnInit } from '@angular/core';
import * as Bcryptjs from "bcryptjs";
import { NavController } from '@ionic/angular';
import { MethodApiServiceService } from '../../services/method-api-service.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  cedula:number;
  password:string;
  datos=null;


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
    this._methodsApiRestService.PostMethod(endpoint,params)
      .subscribe(
        response => {
          if(typeof response[0] === 'undefined' || response[0] === null){
            swal.fire("Ups!", "Usuario no encontrado", "error");
          }else{
            var password=response[0]['us_password'];
            if(this.password!=null && this.password!=""){
              var sw=Bcryptjs.compareSync(this.password, password);
            }else{
              swal.fire("Ups!", "Contraseña vacia", "error");
            }
            if(sw) {
              localStorage.setItem('name', response[0]['us_name']);
              localStorage.setItem('email', response[0]['us_email']);
              localStorage.setItem('cedula', response[0]['us_cedula']);
              localStorage.setItem('celular', response[0]['us_cellphone']);
              this.navCtrl.navigateRoot('/inicio');
            }else{
              swal.fire("Ups!", "Contraseña Incorrecta", "error");
            }
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
    let datos={
      "cedula":this.cedula,
    }
    this.login('/users/FindUser',datos);
  }

}
