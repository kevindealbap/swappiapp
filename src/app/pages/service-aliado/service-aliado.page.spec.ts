import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServiceAliadoPage } from './service-aliado.page';

describe('ServiceAliadoPage', () => {
  let component: ServiceAliadoPage;
  let fixture: ComponentFixture<ServiceAliadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceAliadoPage ],
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
