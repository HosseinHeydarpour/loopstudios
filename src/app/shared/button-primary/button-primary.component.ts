import { Component } from '@angular/core';

@Component({
  selector: 'button[appButtonPrimary]',
  standalone: true,
  imports: [],
  templateUrl: './button-primary.component.html',
  styleUrl: './button-primary.component.scss',
  host: {
    class: 'btn',
  },
})
export class ButtonPrimaryComponent {}
