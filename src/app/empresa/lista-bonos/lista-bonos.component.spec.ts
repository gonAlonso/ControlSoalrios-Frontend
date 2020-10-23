import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBonosComponent } from './lista-bonos.component';

describe('ListaBonosComponent', () => {
  let component: ListaBonosComponent;
  let fixture: ComponentFixture<ListaBonosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaBonosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBonosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
