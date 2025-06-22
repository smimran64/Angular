import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editstudentform } from './editstudentform';

describe('Editstudentform', () => {
  let component: Editstudentform;
  let fixture: ComponentFixture<Editstudentform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Editstudentform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Editstudentform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
