import { Component, OnInit } from '@angular/core';
import { MethodApiServiceService } from 'src/app/services/method-api-service.service';
import { NavController } from '@ionic/angular';
import { User } from '../models/user';
import { File } from '@ionic-native/file/ngx';
import Swal from 'sweetalert2';

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
    public navCtrl: NavController, private file: File) { }

  ngOnInit() {
    
this.name =localStorage.getItem('name');
this.lastname = localStorage.getItem('lastNames');
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
      this.name = response['user']['names'];
      this.lastname = response['user']['lastNames'];

      }, error=> {
        this.cedula = localStorage.getItem('cedula');
        this.correo = localStorage.getItem('email');
        this.celular = localStorage.getItem('celular');
        this.name = localStorage.getItem('name');
        this.lastname = localStorage.getItem('lastNames');
      });

}


uploadFile(){

   /*  let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.get('avatar').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result
        })
      };
    }
   */

}

registrar(){

  let datos={

      "address": this.direccion,
      "email": this.correo,
      "birthDate": this.fecha,
      "user": {
          "id": this.idUser,
          "names": this.name,
          "lastNames": this.lastname,
          "email": this.correo,
          "cellPhone": this.celular
      }
  };



this._methodsApiRestService.PostMethod('/profile',datos).subscribe (
   r =>{
     var resultado = r;
console.log(resultado);
if(r['id'] != null){
Swal.fire("Evento de Aplicacion", "Perfil creado con exito", 'success');
this.navCtrl.navigateRoot('/inicio');
}else{
  Swal.fire("Evento de Aplicacion", "Error al guardar el perfil", 'error');

}
});

}


}
