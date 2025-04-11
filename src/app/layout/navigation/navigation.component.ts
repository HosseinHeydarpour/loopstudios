import { NgFor } from '@angular/common';
import { Component, input } from '@angular/core';

export interface Navigation {
  label: string;
  link: string;
}

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [NgFor],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  navigationItems = input.required<Navigation[]>();
}
