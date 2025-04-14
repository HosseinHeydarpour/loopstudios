import { Injectable, signal } from '@angular/core';
import { Navigation } from './navigation.component';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  navigationItems: Navigation[] = [
    {
      label: 'About',
      link: '#',
    },
    {
      label: 'Careers',
      link: '#',
    },
    {
      label: 'Events',
      link: '#',
    },
    {
      label: 'Products',
      link: '#',
    },
    {
      label: 'Support',
      link: '#',
    },
  ];

  constructor() {}

  get menu() {
    return this.navigationItems;
  }
}
