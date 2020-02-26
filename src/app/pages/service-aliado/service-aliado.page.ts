import { Component, OnInit } from '@angular/core';
import { MethodApiServiceService } from '../../services/method-api-service.service';
import swal from 'sweetalert2';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-aliado',
  templateUrl: './service-aliado.page.html',
  styleUrls: ['./service-aliado.page.scss'],
})
export class ServiceAliadoPage implements OnInit {

  cedula:any;
  constructor(private _methodsApiRestService: MethodApiServiceService,
    public navCtrl: NavController,
    public routes: Router) { }
mensaje : any;


  ngOnInit() {
    this.cedula = localStorage.getItem('cedula').toString();
  }

  vincular(){
    /*let datos={
      "cedula":this.cedula,
      "aliado_id":1,
      "ca_cantPuntos":564,
    }
    this.service('/cuentas/create',datos);*/
    let datos = {
      "partner": {
        "id": 1
      },
      "user": {
        "documentId": localStorage.getItem('cedula').toString()
      },
      "numberOfPoints": Math.floor((Math.random() * 10) + 100)
    };

    this.service('/partner-account', datos);
  }

  service(endpoint,params){
    this._methodsApiRestService.PostMethod(endpoint,params)
      .subscribe(
        response => {
          if(response) {
            swal.fire("Evento de Aplicacion",' Vinculacion del aliado exitosa ' , "success")
            this.navCtrl.navigateRoot('/inicio');

          }else{
           this.mensaje = response['message'];
            swal.fire("Evento de Aplicacion", this.mensaje, "error");
          }
        },
          error => {
            if (error.status === 406) {
              swal.fire("Ups!", "Ya existe una cuenta vinculada", "warning");
              this.navCtrl.navigateRoot('/inicio');

            }
            if (!error.ok && error.status === 422) {
              swal.fire("Evento de Aplicacion!", error.error.message, "error");
              this.navCtrl.navigateRoot('/inicio');

            }

            
             else {

            }
          }
      );
  }

}
