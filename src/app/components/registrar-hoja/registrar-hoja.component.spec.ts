import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarHojaComponent } from './registrar-hoja.component';

describe('RegistrarHojaComponent', () => {
  let component: RegistrarHojaComponent;
  let fixture: ComponentFixture<RegistrarHojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarHojaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarHojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
