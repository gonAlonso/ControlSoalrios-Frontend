import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOperarioComponent } from './form-operario.component';

describe('FormOperarioComponent', () => {
  let component: FormOperarioComponent;
  let fixture: ComponentFixture<FormOperarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormOperarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOperarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
