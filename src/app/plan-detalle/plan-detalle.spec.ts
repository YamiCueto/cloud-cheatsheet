import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDetalle } from './plan-detalle';

describe('PlanDetalle', () => {
  let component: PlanDetalle;
  let fixture: ComponentFixture<PlanDetalle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanDetalle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanDetalle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
