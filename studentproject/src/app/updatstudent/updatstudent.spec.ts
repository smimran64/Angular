import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatstudent } from './updatstudent';

describe('Updatstudent', () => {
  let component: Updatstudent;
  let fixture: ComponentFixture<Updatstudent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Updatstudent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatstudent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
