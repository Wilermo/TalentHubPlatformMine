import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarPlanComponent } from './cambiar-plan.component';

describe('CambiarPlanComponent', () => {
  let component: CambiarPlanComponent;
  let fixture: ComponentFixture<CambiarPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiarPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambiarPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
