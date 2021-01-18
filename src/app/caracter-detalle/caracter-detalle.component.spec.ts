import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracterDetalleComponent } from './caracter-detalle.component';

describe('CaracterDetalleComponent', () => {
  let component: CaracterDetalleComponent;
  let fixture: ComponentFixture<CaracterDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaracterDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracterDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
