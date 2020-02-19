import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SeleccionAliadoPage } from './seleccion-aliado.page';
describe('SeleccionAliadoPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SeleccionAliadoPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(SeleccionAliadoPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=seleccion-aliado.page.spec.js.map