import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VewAllLocation } from './vew-all-location';

describe('VewAllLocation', () => {
  let component: VewAllLocation;
  let fixture: ComponentFixture<VewAllLocation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VewAllLocation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VewAllLocation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
