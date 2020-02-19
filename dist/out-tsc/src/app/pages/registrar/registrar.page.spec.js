import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RegistrarPage } from './registrar.page';
describe('RegistrarPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RegistrarPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(RegistrarPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=registrar.page.spec.js.map