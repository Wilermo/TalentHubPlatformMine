import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarNominaComponent } from './registrar-nomina.component';

describe('RegistrarNominaComponent', () => {
  let component: RegistrarNominaComponent;
  let fixture: ComponentFixture<RegistrarNominaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarNominaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarNominaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
