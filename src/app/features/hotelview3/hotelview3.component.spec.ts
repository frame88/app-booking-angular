import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hotelview3Component } from './hotelview3.component';

describe('Hotelview3Component', () => {
  let component: Hotelview3Component;
  let fixture: ComponentFixture<Hotelview3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hotelview3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hotelview3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
