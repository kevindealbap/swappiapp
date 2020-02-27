import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MethodApiServiceService } from '../../services/method-api-service.service';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.page.html',
  styleUrls: ['./movimientos.page.scss'],
})
export class MovimientosPage implements OnInit {
  ntransaccion: any;
  ncuenta: any;
  nrecarga: any;
  fecha_transaccion: Date;
  items: any;
  datos: any[];
  data: any = []
  arregloDatos: any = []
  constructor(private navCtrl: NavController, private _methodApi: MethodApiServiceService) { }

  ngOnInit() {
    this.service('/recharge-list');
  }


  service(endpoint) {

    this._methodApi.GetMethod(endpoint).subscribe(r => {

      if (r != null) {


        for (let c in r) {


          let fecha = r[c].createdOn
          fecha = fecha.split('T')
          let hora = fecha[1]
          hora = hora.split(':')
          hora = hora[0] + ':' + hora[1]
          fecha = fecha[0]

          fecha = fecha.split('-')
          fecha = fecha[2] + '/' + fecha[1] + '/' + fecha[0]


          let datos = {
            ntransaccion: r[c].id,
            ntarjeta: r[c].card.number,
            cantidad: r[c].quantity,
            fecha: fecha,
            hora: hora

          };

          this.arregloDatos.push(datos)




        }
        console.log(this.arregloDatos);
      }

    })



  }

}