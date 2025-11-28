import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalAssignment } from './signal-assignment';

describe('SignalAssignment', () => {
  let component: SignalAssignment;
  let fixture: ComponentFixture<SignalAssignment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalAssignment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalAssignment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
