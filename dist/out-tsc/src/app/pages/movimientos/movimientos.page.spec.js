import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { MovimientosPage } from './movimientos.page';
describe('MovimientosPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MovimientosPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(MovimientosPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=movimientos.page.spec.js.map