import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelviewComponent } from './hotelview.component';

describe('HotelviewComponent', () => {
  let component: HotelviewComponent;
  let fixture: ComponentFixture<HotelviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
