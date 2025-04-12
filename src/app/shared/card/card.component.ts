import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  host: {
    class: 'item group',
  },
})
export class CardComponent {
  desktopImg = input.required<string>();
  mobileImg = input.required<string>();
  title = input.required<string>();
}
