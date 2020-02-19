import { Component, OnInit } from '@angular/core';
import { MethodApiServiceService } from 'src/app/services/method-api-service.service';
import { NavController } from '@ionic/angular';

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
  constructor(private _methodsApiRestService: MethodApiServiceService,
    public navCtrl: NavController) { }

  ngOnInit() {
   /*  
    this.name=localStorage.getItem('name') + " " + localStorage.getItem('lastName');
    this.correo=localStorage.getItem('email');
    this.cedula=localStorage.getItem('cedula');
    this.celular=localStorage.getItem('celular'); */
    this.idUser=localStorage.getItem('idUser');
    this._methodsApiRestService.GetMethod('/user/'+this.idUser+"/profile").subscribe(
      response => {
      this.respuesta=response;
      this.correo = this.respuesta.user.email;
      this.cedula = this.respuesta.cedula;
      this.name = this.respuesta.name;
      this.celular = this.respuesta.cellPhone;


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
