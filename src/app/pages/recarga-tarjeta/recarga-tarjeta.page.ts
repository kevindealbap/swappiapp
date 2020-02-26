

import { Component, OnInit } from '@angular/core';
import { MethodApiServiceService } from '../../services/method-api-service.service';
import swal from 'sweetalert2';
import { error } from 'protractor';
import { NavController } from '@ionic/angular';
import Swal from 'sweetalert2';

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
idcard: any;
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

          var id = localStorage.getItem('idUser');
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
                dinero: plata,
                valorCompra: response[x].partner.purchaseValue
              }
              this.cuentas.push(datos);
            }
            this._methodsApiRestService.GetMethod('/user/' + id + '/card')
            .subscribe(data => {

              if (data === null || data === undefined ) {
                swal.fire("Ups!", "El usuario no tiene una tarjeta.", "error");
                this.navCtrl.navigateRoot('/tarjeta-swappi');
              }
              this.saldo = data['amount'];
              this.idcard =data['id'];

            }, error => {
              if (!error.ok) {
                swal.fire("Ups!", "Ocurrió un error obteniendo información de la tarjeta.", "warning");
                this.navCtrl.navigateRoot('/tarjeta-swappi')
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

    let index: number = this.cuentas.findIndex(c => c.aliado === aliadoId);
    var cuenta = this.cuentas[index];
    
    if (event.target.value != undefined && event.target.value !== "") {
      let numberOfPoints: number = parseInt(event.target.value, 10);
      let purchaseValue: number = parseFloat(this.cuentas[index].valorCompra);
      this.total = numberOfPoints * purchaseValue;
      this.dinero = this.total + this.saldo;
    } else {
      this.total = 0;
      this.dinero = 0;
    }
  }

  recargar(){
    if(this.selec>this.dinero){
      Swal.fire("Evento de Aplicaicon", 'La recarga de puntos sobre pasa el limite','warning');

    }else{
      console.log(this.selec);
      let datos={
        "card":{
          "id": this.idcard
        },
        "user": {
          "documentId": this.cedula
        },
        "quantity": this.dinero
      }
      this._methodsApiRestService.PostMethod('/recharge', datos)
      .subscribe(
        response => {
          console.log(response);
          if(response['id']  != null){

          swal.fire("Exito!", "Tarjeta recargada con éxito", "success");

          
          this.navCtrl.navigateRoot('/inicio');


          }else{
            error => {
              if (!error.ok) {
                swal.fire("Ups!", error, "error");
              }
            }
          }
        },
         
        
      );
    }
  }

}
