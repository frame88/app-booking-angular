import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescrizioneComponent } from './descrizione.component';

describe('DescrizioneComponent', () => {
  let component: DescrizioneComponent;
  let fixture: ComponentFixture<DescrizioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescrizioneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescrizioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
