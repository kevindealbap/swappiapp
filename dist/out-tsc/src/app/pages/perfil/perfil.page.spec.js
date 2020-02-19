import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PerfilPage } from './perfil.page';
describe('PerfilPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PerfilPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(PerfilPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=perfil.page.spec.js.map