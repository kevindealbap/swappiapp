  import { Component, OnInit } from '@angular/core';
import * as Bcryptjs from "bcryptjs";
import { NavController } from '@ionic/angular';
import { MethodApiServiceService } from '../../services/method-api-service.service';
import swal from 'sweetalert2';
import { NgModel } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AuthGaurdService } from '../../services/auth-gaurd.service';

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
    public navCtrl: NavController, private auth : AuthenticationService, private auth_guard : AuthGaurdService ) { }

  ngOnInit() {
    var id=localStorage.getItem('cedula');
    //console.log(id);
    if(id!="null" && id!=null){
      this.navCtrl.navigateRoot('/inicio');
    }

    
    
    
  }

/* 


  login(endpoint,params){


    


    this._methodsApiRestService.PostXHTML(endpoint,params)
      .subscribe(
        response => {
        this.estado = response[0]['enable'];
       
          if(typeof response[0] === 'undefined' || response[0] === null){
            swal.fire("Ups!", "Usuario no encontrado", "error");
          } 
          
        if() {
              swal.fire("Ups!", "Contraseña vacia", "error");
            } 
            if(response !== null) {
            
              this.navCtrl.navigateRoot('/inicio');
            }else{
              swal.fire("Ups!", "Contraseña Incorrecta", "error");
            }
          },
          
          error => {
            if (!error.ok) {
              swal.fire("Favor digitar datos correctamente", error, "warning");
            }
          }
      );
      
  } */


  


  sendLogin(){
    var salt = Bcryptjs.genSaltSync(10);
    if(this.cedula == undefined || this.password == undefined) {
      swal.fire("Atencion", "Favor digitar correctamente el usuario y/o contraseña", "warning");
    } else{

    var cedulaUser = this.cedula.toString()+ ":" + this.password.toString();
    var passscrypt = btoa(cedulaUser);
    console.log(cedulaUser);
    console.log(passscrypt);
    let datos={
      "documentId": this.cedula,
      "password": passscrypt,     
    }
    // this.login('/found-user',datos);
    this.auth.authenticate(this.cedula, this.password).subscribe (response =>{
      if(response != null){
  
        localStorage.setItem('name', response['user']['names']);
        localStorage.setItem('idUser', response['user']['id']);
        localStorage.setItem('lastNames', response['user']['lastNames']);
        localStorage.setItem('email', response['user']['email']);
        localStorage.setItem('cedula', response['user']['documentId']);
        localStorage.setItem('celular', response['user']['cellPhone']);
        this.navCtrl.navigateRoot('/inicio');
   
      }
        else{
              swal.fire("Ups!", "Contraseña Incorrecta", "error");
            }
          },
          
          error => {
            if (!error.ok) {
              swal.fire("Favor digitar datos correctamente", error, "warning");
            }
          }
    
    );

  }
  }
}
