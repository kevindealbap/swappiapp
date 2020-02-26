import { Injectable, ViewChild } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { RegistrarPage } from '../pages/registrar/registrar.page';

@Injectable({
  providedIn: 'root'
})


export class MethodApiServiceService {
  //domain="http://44.228.37.182:8080/api/v1"; //Produccion
  domain="http://192.168.2.153:8084/api";  //Desarrollo
  constructor(private http:HttpClient) { }

  public PostMethod(endpoint,params,domain=this.domain){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer '+sessionStorage.getItem('token'),
      'Access-Control-Allow-Origin':  '*',
      'Access-Control-Allow-Methods':'GET, POST'
    });
    //console.log(domain+endpoint);
    
   return this.http.post(domain+endpoint,JSON.stringify(params),{headers})
   
          .map(res => res );
          
        }

        public PutMethod(endpoint,params,domain=this.domain){
          let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer '+sessionStorage.getItem('token'),
           'Access-Control-Allow-Origin':  '*',
            'Access-Control-Allow-Methods':'GET, POST'
          });
          //console.log(domain+endpoint);
          
         return this.http.put(domain+endpoint,JSON.stringify(params),{headers})
         
                .map(res => res );
                
              }


  public PostXHTML(endpoint, params,domain=this.domain){
 let headers = new HttpHeaders({
  'Content-Type': 'application/json',
 'Authorization': 'Bearer '+sessionStorage.getItem('token'),
    'Access-Control-Allow-Origin':  '*',
    'Access-Control-Allow-Methods':'GET, POST'

 })



 return this.http.post(domain+endpoint,(params),{headers})
 .map(res => res );

  }

  public GetMethod(endpoint, domain=this.domain){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+sessionStorage.getItem('token'),
      'Accept': 'application/json',
      'Access-Control-Allow-Origin':  '*',
      'Access-Control-Allow-Methods':'GET, POST'
    });
   return this.http.get(domain+endpoint,{headers})
          .map(res => res);
  }
}
