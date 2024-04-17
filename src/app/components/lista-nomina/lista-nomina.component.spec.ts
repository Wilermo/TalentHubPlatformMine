import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNominaComponent } from './lista-nomina.component';

describe('ListaNominaComponent', () => {
  let component: ListaNominaComponent;
  let fixture: ComponentFixture<ListaNominaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaNominaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaNominaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
