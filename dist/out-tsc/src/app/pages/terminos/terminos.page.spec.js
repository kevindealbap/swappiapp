import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TerminosPage } from './terminos.page';
describe('TerminosPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TerminosPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(TerminosPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=terminos.page.spec.js.map