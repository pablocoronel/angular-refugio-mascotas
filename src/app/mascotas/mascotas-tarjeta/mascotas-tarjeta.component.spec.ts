import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotasTarjetaComponent } from './mascotas-tarjeta.component';

describe('MascotasTarjetaComponent', () => {
  let component: MascotasTarjetaComponent;
  let fixture: ComponentFixture<MascotasTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotasTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotasTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
