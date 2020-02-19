import { Component, OnInit } from '@angular/core';
import { MethodApiServiceService } from '../../services/method-api-service.service';
import { NavController } from '@ionic/angular';
import swal from 'sweetalert2';

@Component({
  selector: 'app-seleccion-aliado',
  templateUrl: './seleccion-aliado.page.html',
  styleUrls: ['./seleccion-aliado.page.scss'],
})
export class SeleccionAliadoPage implements OnInit {
aliados:any=[];
  constructor(private _methodsApiRestService: MethodApiServiceService,
    public navCtrl: NavController) { }

  ngOnInit() {
    this.getAliados('/partner-list');
  }

  getAliados(endpoint){
    this._methodsApiRestService.GetMethod(endpoint)
      .subscribe(
        response => {
            this.aliados=response;
        },
          error => {
            if (!error.ok) {
              swal.fire("Ups!", "Error en Petición", "error");
            }
          }
      );
     
  }

}
