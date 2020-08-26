import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionSolariosComponent } from './gestion-solarios.component';

describe('GestionSolariosComponent', () => {
  let component: GestionSolariosComponent;
  let fixture: ComponentFixture<GestionSolariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionSolariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionSolariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
