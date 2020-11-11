import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDatosEmpresaComponent } from './form-datos-empresa.component';

describe('FormDatosEmpresaComponent', () => {
  let component: FormDatosEmpresaComponent;
  let fixture: ComponentFixture<FormDatosEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDatosEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDatosEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
