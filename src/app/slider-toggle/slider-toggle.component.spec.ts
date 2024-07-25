import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderToggleComponent } from './slider-toggle.component';

describe('SliderToggleComponent', () => {
  let component: SliderToggleComponent;
  let fixture: ComponentFixture<SliderToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
