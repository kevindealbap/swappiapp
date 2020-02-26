import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import swal from 'sweetalert2';
import * as CryptoJS from 'crypto-js';
import { MethodApiServiceService } from '../../services/method-api-service.service';
import { NavController } from '@ionic/angular';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tarjeta-swappi',
  templateUrl: './tarjeta-swappi.page.html',
  styleUrls: ['./tarjeta-swappi.page.scss'],
})
export class TarjetaSwappiPage implements OnInit {

id: any;
ntarjeta:number;
fech:string;
ccv:number;
swicht:number;
data : any;
cedula:any;
name : any;
idtarjeta : any;
estadoTarjeta: any;

  constructor(private _methodsApiRestService: MethodApiServiceService,
    public navCtrl: NavController) { }

  ngOnInit() {
    this.id=localStorage.getItem('idUser');
    this.cedula=localStorage.getItem('cedula');
    this.name=localStorage.getItem('name') + " " + localStorage.getItem('lastNames');
    this.cardIfExist();
    
/*   
    var inputQuantity = [];
    $(function() {
      $(".quantity").each(function(i) {
        inputQuantity[i]=this.defaultValue;
         $(this).data("idx",i); // save this field's index to access later
      });
      $(".quantity").on("keyup", function (e) {
        var $field = $(this),
            val=this.value,
            $thisIndex=parseInt($field.data("idx"),10); // retrieve the index
//        window.console && console.log($field.is(":invalid"));
          //  $field.is(":invalid") is for Safari, it must be the last to not error in IE8
        if (this.validity && this.validity.badInput || isNaN(val) || $field.is(":invalid") ) {
            this.value = inputQuantity[$thisIndex];
            return;
        } 
        if (val.length > Number($field.attr("maxlength"))) {
          val=val.slice(0, 5);
          $field.val(val);
        }
        inputQuantity[$thisIndex]=val;
      });      
    }); */

  
  
  
  
  
  
  }

  

  cardImage = '../../../assets/imgs/credit-card.png';




  guardar(){
    

this.cardIfExist();
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

    let datos=
    {
      "user":
      {"documentId":this.cedula
    },

"number": this.ntarjeta,
"expireDate":this.fech,
"pin":this.ccv,
"amount":0,
"state": this.swicht

  }
 
  this._methodsApiRestService.PostMethod('/card',datos).subscribe (r =>{
r = this.data;
console.log(this.data);
Swal.fire("Evento De Aplicacion","Tarjeta creada exitosamente",'success')




this.cardIfExist();
  });


    }
  }


  cardIfExist(){
    var cedula=localStorage.getItem('cedula');
    let datos={
      "usuario":cedula
    }
    this._methodsApiRestService.GetMethod('/user/'+this.id+'/card')
    .subscribe(
      
      response=>{
        /*   if(typeof data[0] === 'undefined' || data[0] === null){
            this.swicht=0;
          }else{
            this.swicht=1; */

            
            this.ntarjeta = response['number'];
            this.ccv = response['pin'];
            this.fech = response['expireDate'];
            this.idtarjeta = response['id'];
            this.estadoTarjeta = response['active'];

if(this.estadoTarjeta == true){
  this.estadoTarjeta = 1;
}
if(this.estadoTarjeta == false){
  this.estadoTarjeta = 2;
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
    

      let datos2=
      {
        "user":
        {"documentId":this.cedula
      },
  
  "number": this.ntarjeta,
  "expireDate":fechenc,
  "pin":ccvenc,
  "amount":0,
  "state": this.swicht
  
    }
      //console.log(datos);
      this._methodsApiRestService.PostMethod('/card/'+this.idtarjeta+'/activate',datos2).subscribe (r =>{
        r =this.data;
        swal.fire("Exitos!", "Tarjeta Activada", "success");

        this.estadoTarjeta = 1;


      },
        error => {
          if (!error.ok) {
            swal.fire("Ups!", "Error en Petición", "error");
          }
                                                             
      });
    
      
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
      "user":
      {"documentId":this.cedula
    },

"number": this.ntarjeta,
"expireDate":this.fech,
"pin":this.ccv,
"amount":0,
"state": this.swicht

    }
    this._methodsApiRestService.PostMethod('/card/'+this.idtarjeta+'/deactivate',datos)
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
