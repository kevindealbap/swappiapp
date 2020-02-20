import { Component, OnInit } from '@angular/core';
import { MethodApiServiceService } from 'src/app/services/method-api-service.service';
import { NavController } from '@ionic/angular';
import { User } from '../models/user';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
name :string;
lastname :string;
celular : any;
cedula : any;
correo: string;
fecha : any;
estadocivil : any;
direccion : any;
idUser: any;
respuesta : any;
user : User;
documentId: any;
  constructor(private _methodsApiRestService: MethodApiServiceService,
    public navCtrl: NavController) { }

  ngOnInit() {
    
    // this.name=localStorage.getItem('name') + " " + localStorage.getItem('lastNames');
/*    this.correo=localStorage.getItem('email');

    this.celular=localStorage.getItem('celular');
    */ 
    this.idUser=localStorage.getItem('idUser');
    this._methodsApiRestService.GetMethod('/user/'+this.idUser+"/profile").subscribe(
      response => {

        const data = JSON.stringify(response);
        
      console.log("DATOS DE USUARIO" +data);

      this.direccion = response['address'];
      this.fecha = response['birthDate'];
      this.cedula = response['user']['documentId'];
      this.correo = response['user']['email'];
      this.celular = response['user']['cellPhone'];
      this.name = response['user']['names'] +" " + response['user']['lastNames'];

 
      });

}
registrar(){

  let datos={
    
    "user":{
"id":this.idUser,      
"names":this.name,
"lastName":this.lastname,
"email":this.correo,
"cellPhone":this.celular

    },

    
      "address": this.direccion,
      "email":this.correo,
      "birthDate":this.fecha
      
  
    }



this._methodsApiRestService.PostMethod('/profile',datos).subscribe (
   r =>{
     var resultado = r;
console.log(resultado);

});

}


}
