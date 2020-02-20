import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { MethodApiServiceService } from '../../services/method-api-service.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {
  
  name :string;
  lastNames : string;
  email:string;
  cedula : string;
  celular:string;
  totalDinero:number = 0;
  cuentas:any[]=[];
  id:any;

  constructor(private menu: MenuController,
    public navCtrl: NavController,
    private _methodsApiRestService: MethodApiServiceService) {
    }

  ngOnInit() {
    this.id=localStorage.getItem('idUser');
    this.name=localStorage.getItem('name');
    this.lastNames=localStorage.getItem('lastNames');
    this.email=localStorage.getItem('email');
    this.cedula=localStorage.getItem('cedula');
    this.celular=localStorage.getItem('celular');
    this.extraer();
  }

  openFirst() {
    this.menu.enable(true,'first');
    this.menu.toggle();
  }



  logout(){
    localStorage.setItem('name', null);
    localStorage.setItem('email', null);
    localStorage.setItem('cedula', null);
    localStorage.setItem('celular', null);
    this.navCtrl.navigateRoot('/login');
  }

  extraer(){
    //this.service('/cuentas/cuentasList/'+this.cedula);
    this.service('/partner-account-list?cedula=' + this.cedula);
  }

  service(endpoint){
    this._methodsApiRestService.GetMethod(endpoint)
      .subscribe(
        response => {
          if(typeof response === 'undefined' || response === null) {
            //swal.fire("Ups!", "Usuario no encontrado", "error");
          } else {
            var plata;
            for (let c in response) {
              plata = response[c].numberOfPoints * parseInt(response[c].partner.purchaseValue);
              let data = {
                id: response[c].id,
                partnerName: response[c].partner.name,
                points: response[c].numberOfPoints,
                dinero: plata
              };
              this.totalDinero = this.totalDinero + plata;
              this.cuentas.push(data);
            }
            /*for (let x in response) {
              var plata;
              this._methodsApiRestService.GetMethod('/aliados/valuePunto/'+response[x].aliado_id)
              .subscribe(
                data=>{
                    plata=parseInt(response[x].ca_cantPuntos) * parseInt(data[0].al_valueCompre);
                    let datos={
                      id:response[x].id,
                      name:data[0].al_name,
                      imagen:data[0].al_image,
                      cedula:response[x].us_cedula,
                      aliado:response[x].aliado_id,
                      status:response[x].ca_status,
                      cantidad:response[x].ca_cantPuntos,
                      dinero:plata
                    }
                    this.cuentas.push(datos);
                }
              );
            }*/
          }
        },
          /* error => {
            if (!error.ok) {
              swal.fire("Ups!", "Error en Petición", "error");
            }
          } */
      );
  }

}
