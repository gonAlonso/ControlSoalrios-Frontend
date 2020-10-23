import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBonosComponent } from './form-bonos.component';

describe('FormBonosComponent', () => {
  let component: FormBonosComponent;
  let fixture: ComponentFixture<FormBonosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBonosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBonosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
