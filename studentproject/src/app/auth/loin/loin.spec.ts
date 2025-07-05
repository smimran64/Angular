import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loin } from './loin';

describe('Loin', () => {
  let component: Loin;
  let fixture: ComponentFixture<Loin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Loin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
