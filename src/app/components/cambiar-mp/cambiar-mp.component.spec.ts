import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarMPComponent } from './cambiar-mp.component';

describe('CambiarMPComponent', () => {
  let component: CambiarMPComponent;
  let fixture: ComponentFixture<CambiarMPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiarMPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambiarMPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
