import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSolariosComponent } from './lista-solarios.component';

describe('ListaSolariosComponent', () => {
  let component: ListaSolariosComponent;
  let fixture: ComponentFixture<ListaSolariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSolariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSolariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
