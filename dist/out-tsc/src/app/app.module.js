import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [AppComponent],
        entryComponents: [],
        imports: [BrowserModule,
            IonicModule.forRoot(),
            AppRoutingModule, HttpClientModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
        providers: [
            StatusBar,
            { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map