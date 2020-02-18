import { Component, OnInit } from '@angular/core';
import { MethodApiServiceService } from '../../services/method-api-service.service';
import swal from 'sweetalert2';

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

  constructor(private _methodsApiRestService: MethodApiServiceService) { }

  ngOnInit() {
    this.cedula=localStorage.getItem('cedula');
    this.service('/cuentas/cuentasList/'+this.cedula);
  }
  service(endpoint){
    this._methodsApiRestService.GetMethod(endpoint)
      .subscribe(
        response => {
          if(typeof response[0] === 'undefined' || response[0] === null){
            //swal.fire("Ups!", "Usuario no encontrado", "error");
          }else{
            for (let x in response) {
              var plata;
              var al_name;
              var img;
              this._methodsApiRestService.GetMethod('/aliados/valuePunto/'+response[x].aliado_id)
              .subscribe(
                data=>{
                  console.log(data);
                    plata=parseInt(response[x].ca_cantPuntos) * parseInt(data[0].al_valueCompre);
                    al_name=data[0]['al_name'];
                    img=data[0]['al_image'];
                    let datos={
                      id:response[x].id,
                      cedula:response[x].us_cedula,
                      nameAliado:al_name,
                      aliado:response[x].aliado_id,
                      status:response[x].ca_status,
                      cantidad:response[x].ca_cantPuntos,
                      imagen:img,
                      dinero:plata
                    }
                    this.dinero+=plata;
                    this.cuentas.push(datos);
                    console.log(this.cuentas);
                }
              );
            }
          }
        },
          error => {
            if (!error.ok) {
              swal.fire("Ups!", "Error en Petición", "error");
            }
          }
      );
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
