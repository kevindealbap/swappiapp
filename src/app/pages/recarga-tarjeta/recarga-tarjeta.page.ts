import { Component, OnInit } from '@angular/core';
import { MethodApiServiceService } from '../../services/method-api-service.service';
import swal from 'sweetalert2';
import { error } from 'protractor';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-recarga-tarjeta',
  templateUrl: './recarga-tarjeta.page.html',
  styleUrls: ['./recarga-tarjeta.page.scss'],
})
export class RecargaTarjetaPage implements OnInit {
  cuentas:any[]=[];
  cedula=null;
  dinero:number=0;
  selec:number;
  activeBtn:number = 0;
  saldo:number = 0;
  total:number = 0;

  constructor(private _methodsApiRestService: MethodApiServiceService,
    public navCtrl: NavController) { }

  ngOnInit() {
    this.cedula=localStorage.getItem('cedula');
    this.service('/partner-account-list?cedula='+ this.cedula);
  }
  service(endpoint){

    this._methodsApiRestService.GetMethod(endpoint)
      .subscribe(
        response => {
          //TODO reemplazar por el ID del usuario en sesión.
          var id = 9;
          if(typeof response === 'undefined' || response === null){
            //swal.fire("Ups!", "Usuario no encontrado", "error");
          }else{
            for (let x in response) {
              var plata;
              plata = (response[x].numberOfPoints) * parseInt(response[x].partner.purchaseValue);
              let datos={
                id:response[x].id,
                cedula:response[x].user.documentId,
                nameAliado: response[x].partner.name,
                aliado:response[x].partner.id,
                status:response[x].status,
                cantidad:response[x].numberOfPoints,
                imagen: 'puntossaludables.png',
                dinero: plata
              }
              this.dinero = parseInt(this.dinero + plata);
              this.cuentas.push(datos);
            }
            this._methodsApiRestService.GetMethod('/user/' + id + '/card')
            .subscribe(data => {

              if (data === null || data === undefined ) {
                swal.fire("Ups!", "El usuario no tiene una tarjeta.", "error");
                this.activeBtn = 0;
                this.navCtrl.navigateRoot('/tarjeta-swappi');
              }
              //this.saldo = data.amount;
              this.activeBtn = 1;

            }, error => {
              if (!error.ok) {
                swal.fire("Ups!", "Ocurrió un error obteniendo información de la tarjeta.", "error");
              }
            });
          }
        },
          error => {
            if (!error.ok) {
              swal.fire("Ups!", "Error en Petición", "error");
            }
          }
      );
  }

  getPoints(event, aliadoId) {

    let numberOfPoints: number = parseInt(event.target.value, 10);
    let index: number = this.cuentas.findIndex(c => c.aliados === aliadoId);
    let purchaseValue: number = parseFloat(this.cuentas[index].dinero);
    this.total = this.total + numberOfPoints * purchaseValue;
  }

  recargar(){
    if(this.selec>this.dinero){
      console.log("te pasaste");
    }else{
      console.log(this.selec);
      let datos={
        "usuario":this.cedula,
        "monto":this.selec,
      }
      this._methodsApiRestService.PostMethod('/tarjetas/descargar',datos)
      .subscribe(
        response => {
          console.log(response);
          
          
        },
          error => {
            if (!error.ok) {
              swal.fire("Ups!", error, "error");
            }
          }
      );
    }
  }

}
