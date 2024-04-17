import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaVisaComponent } from './tarjeta-visa.component';

describe('TarjetaVisaComponent', () => {
  let component: TarjetaVisaComponent;
  let fixture: ComponentFixture<TarjetaVisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaVisaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TarjetaVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
