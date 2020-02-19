import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RecargaTarjetaPage } from './recarga-tarjeta.page';
describe('RecargaTarjetaPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RecargaTarjetaPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(RecargaTarjetaPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=recarga-tarjeta.page.spec.js.map