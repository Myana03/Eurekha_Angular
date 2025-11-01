import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment1 } from './assignment1';

describe('Assignment1', () => {
  let component: Assignment1;
  let fixture: ComponentFixture<Assignment1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assignment1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
