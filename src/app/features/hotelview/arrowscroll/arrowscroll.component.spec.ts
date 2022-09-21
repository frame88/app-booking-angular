import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowscrollComponent } from './arrowscroll.component';

describe('ArrowscrollComponent', () => {
  let component: ArrowscrollComponent;
  let fixture: ComponentFixture<ArrowscrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrowscrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrowscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
