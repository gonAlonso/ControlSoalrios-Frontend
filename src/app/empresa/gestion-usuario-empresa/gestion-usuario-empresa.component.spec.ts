import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionUsuarioEmpresaComponent } from './gestion-usuario-empresa.component';

describe('GestionUsuarioEmpresaComponent', () => {
  let component: GestionUsuarioEmpresaComponent;
  let fixture: ComponentFixture<GestionUsuarioEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionUsuarioEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionUsuarioEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
