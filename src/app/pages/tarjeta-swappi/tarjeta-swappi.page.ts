import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import swal from 'sweetalert2';
import * as CryptoJS from 'crypto-js';
import { MethodApiServiceService } from '../../services/method-api-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tarjeta-swappi',
  templateUrl: './tarjeta-swappi.page.html',
  styleUrls: ['./tarjeta-swappi.page.scss'],
})
export class TarjetaSwappiPage implements OnInit {

  constructor(private _methodsApiRestService: MethodApiServiceService,
    public navCtrl: NavController) { }

  ngOnInit() {
    this.cardIfExist();
  }

  cardImage = '../../../assets/imgs/credit-card.png';

  ntarjeta:number;
  fech:string;
  ccv:number;
  swicht:number;

  cardIfExist(){
    var cedula=localStorage.getItem('cedula');
    let datos={
      "usuario":cedula
    }
    this._methodsApiRestService.PostMethod('/tarjetas/findcard',datos)
    .subscribe(
      data=>{
          if(typeof data[0] === 'undefined' || data[0] === null){
            this.swicht=0;
          }else{
            this.swicht=1;
            this.ntarjeta=data[0].tj_numero;
            this.ccv=this.decryptData(data[0].tj_pin);
            this.fech=this.decryptData(data[0].tj_fecvec);
        }
      }
    );
  }

  test(event){
    $("#fech").keypress(function (e) {
      if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        return false;
      }
      var curchr = this.value.length;
      var curval = $(this).val();
      if (curchr == 2 && curval.indexOf("(") <= -1) {
        $(this).val(curval + "/");
      }else if (curchr == 5) {
        $(this).attr('maxlength', '5');
      }
    });
  }

  verificar(){
    var d = new Date();
    var n = d.getFullYear();
    var actual=n.toString().substring(2,4);
    var fechaV=$("#fech").val();
    var cadena=fechaV;
    var one=cadena.substring(0,2);
    var two=cadena.substring(3,5);
    if(parseInt(one)>12){
      swal.fire("Ups!", "Error campo Fecha vencimiento", "error");
    }else if(parseInt(two)<=parseInt(actual)){
      swal.fire("Ups!", "Tarjeta Vencida", "error");
    }else{
      var fechenc=this.encryptData(this.fech);
      var ccvenc=this.encryptData(this.ccv);
      var user=localStorage.getItem('cedula');
      let datos={
        "fecha":fechenc,
        "ccv":ccvenc,
        "ntarjeta":this.ntarjeta,
        "usuario":user
      }
      //console.log(datos);
      this._methodsApiRestService.PostMethod('/tarjetas/create',datos)
      .subscribe(
        response => {
          //console.log(response);
          if(response){
            swal.fire("Exitos!", "Tarjeta Activada", "success");
            this.navCtrl.navigateRoot('/inicio');
          }else{
            swal.fire("Ups!", "Tarjeta no activada", "error");
          }
        },
          error => {
            if (!error.ok) {
              swal.fire("Ups!", "Error en Petición", "error");
            }
          }
      );
    }
  }

  encryptData(data) {
    try {
      var user=localStorage.getItem('cedula');
      return CryptoJS.AES.encrypt(JSON.stringify(data), "B10f00d2019"+user).toString();
    } catch (e) {
      //console.log(e);
    }
  }

  decryptData(data) {
    try {
      var user=localStorage.getItem('cedula');
      const bytes = CryptoJS.AES.decrypt(data, "B10f00d2019"+user);
      if (bytes.toString()) {
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      }
      return data;
    } catch (e) {
      //console.log(e);
    }
  }

  desactivar(){
    var cedula=localStorage.getItem('cedula');
    let datos={
      "usuario":cedula
    }
    this._methodsApiRestService.PostMethod('/tarjetas/findcard',datos)
          .subscribe(
            update=>{
              if(update){
                swal.fire("Ups!", "Tarjeta Desactivada", "success");
                this.navCtrl.navigateRoot('/inicio');
              }else{
                swal.fire("Ups!", "Tarjeta No pudo ser Desactivada", "error");
                this.navCtrl.navigateRoot('/inicio');
              }
            }
      );
  }

}
