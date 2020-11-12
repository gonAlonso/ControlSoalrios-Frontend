import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOperariosComponent } from './lista-operarios.component';

describe('ListaOperariosComponent', () => {
  let component: ListaOperariosComponent;
  let fixture: ComponentFixture<ListaOperariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaOperariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaOperariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
