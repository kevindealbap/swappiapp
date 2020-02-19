import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ServiceAliadoPage } from './service-aliado.page';
describe('ServiceAliadoPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ServiceAliadoPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(ServiceAliadoPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=service-aliado.page.spec.js.map