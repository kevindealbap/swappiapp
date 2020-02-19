import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TarjetaSwappiPage } from './tarjeta-swappi.page';
describe('TarjetaSwappiPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TarjetaSwappiPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(TarjetaSwappiPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=tarjeta-swappi.page.spec.js.map