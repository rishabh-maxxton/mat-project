import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.css',
})
export class TooltipComponent {
  message = new FormControl('Info about the action');
}
