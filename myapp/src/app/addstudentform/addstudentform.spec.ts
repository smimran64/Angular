import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addstudentform } from './addstudentform';

describe('Addstudentform', () => {
  let component: Addstudentform;
  let fixture: ComponentFixture<Addstudentform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Addstudentform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addstudentform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
