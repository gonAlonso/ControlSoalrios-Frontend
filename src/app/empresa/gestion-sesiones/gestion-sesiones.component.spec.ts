import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionSesionesComponent } from './gestion-sesiones.component';

describe('GestionSesionesComponent', () => {
  let component: GestionSesionesComponent;
  let fixture: ComponentFixture<GestionSesionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionSesionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionSesionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
