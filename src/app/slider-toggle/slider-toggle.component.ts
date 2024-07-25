import { Component } from '@angular/core';

@Component({
  selector: 'app-slider-toggle',
  templateUrl: './slider-toggle.component.html',
  styleUrl: './slider-toggle.component.css'
})
export class SliderToggleComponent {
  checked = false;
  disabled = false;
}
