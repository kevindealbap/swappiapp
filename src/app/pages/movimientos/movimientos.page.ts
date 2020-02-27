import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MethodApiServiceService } from '../../services/method-api-service.service';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.page.html',
  styleUrls: ['./movimientos.page.scss'],
})
export class MovimientosPage implements OnInit {
ntransaccion : any;
ncuenta : any;
nrecarga : any;
fecha_transaccion : Date;
items : any;
datos : any [];
  constructor( private navCtrl : NavController, private _methodApi : MethodApiServiceService) { }

  ngOnInit() {
this.service('/recharge-list');
  }


  service(endpoint){
this._methodApi.GetMethod(endpoint).subscribe(r=>{

if(r != null){

  for(let c in r) {

    let datos={
       ntransaccion: r[c].id,
       ntarjeta:  r[c].card.number,
       cantidad:  r[c].quantity,
       fecha : r[c].createdOn

    };
    
console.log(datos);

datos.ntransaccion = this.ntransaccion;
datos.ntarjeta = this.ncuenta;
datos.cantidad = this.nrecarga;

  }
}

})



  }

}
