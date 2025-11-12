import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpModuleAssignment } from './http-module-assignment';

describe('HttpModuleAssignment', () => {
  let component: HttpModuleAssignment;
  let fixture: ComponentFixture<HttpModuleAssignment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpModuleAssignment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpModuleAssignment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
