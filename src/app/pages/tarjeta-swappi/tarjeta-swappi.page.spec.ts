import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TarjetaSwappiPage } from './tarjeta-swappi.page';

describe('TarjetaSwappiPage', () => {
  let component: TarjetaSwappiPage;
  let fixture: ComponentFixture<TarjetaSwappiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaSwappiPage ],
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
