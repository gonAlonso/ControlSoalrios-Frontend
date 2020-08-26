import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSolariosComponent } from './edit-solarios.component';

describe('EditSolariosComponent', () => {
  let component: EditSolariosComponent;
  let fixture: ComponentFixture<EditSolariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSolariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSolariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
