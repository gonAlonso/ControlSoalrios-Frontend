import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionOperariosComponent } from './gestion-operarios.component';

describe('GestionOperariosComponent', () => {
  let component: GestionOperariosComponent;
  let fixture: ComponentFixture<GestionOperariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionOperariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionOperariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
