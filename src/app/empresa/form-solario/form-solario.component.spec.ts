import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSolarioComponent } from './form-solario.component';

describe('FormSolarioComponent', () => {
  let component: FormSolarioComponent;
  let fixture: ComponentFixture<FormSolarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSolarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSolarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
