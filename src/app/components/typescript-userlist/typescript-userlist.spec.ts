import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptUserlist } from './typescript-userlist';

describe('TypescriptUserlist', () => {
  let component: TypescriptUserlist;
  let fixture: ComponentFixture<TypescriptUserlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypescriptUserlist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypescriptUserlist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
