import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSubjectComponent } from './emp-subject-component';

describe('EmpSubjectComponent', () => {
  let component: EmpSubjectComponent;
  let fixture: ComponentFixture<EmpSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpSubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
