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

  cedula:number;
  constructor(private _methodsApiRestService: MethodApiServiceService,
    public navCtrl: NavController,
    public routes: Router) { }

  ngOnInit() {
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
        "email": localStorage.getItem('email').toString()
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
            this.routes.navigate(['/inicio']);
          }else{
            swal.fire("Ups!", "Error en Petición", "error");
          }
        },
          error => {
            if (!error.ok && error.status === 400) {
              swal.fire("Ups!", "Ya existe una cuenta vinculada", "error");
            } else {
              swal.fire("Ups!", "Error en Petición", "error");
            }
          }
      );
  }

}
