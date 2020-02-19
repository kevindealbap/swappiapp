import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
let MethodApiServiceService = class MethodApiServiceService {
    constructor(http) {
        this.http = http;
        //domain="http://44.228.37.182:8080/api/v1"; //Produccion
        this.domain = "http://192.168.2.197:8083/api"; //Desarrollo
    }
    PostMethod(endpoint, params, domain = this.domain) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST'
        });
        //console.log(domain+endpoint);
        return this.http.post(domain + endpoint, JSON.stringify(params), { headers })
            .map(res => res);
    }
    PostXHTML(endpoint, params, domain = this.domain) {
        let headers = new HttpHeaders({
            'XTML': ''
        });
    }
    GetMethod(endpoint, domain = this.domain) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST'
        });
        return this.http.get(domain + endpoint, { headers })
            .map(res => res);
    }
};
MethodApiServiceService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], MethodApiServiceService);
export { MethodApiServiceService };
//# sourceMappingURL=method-api-service.service.js.map