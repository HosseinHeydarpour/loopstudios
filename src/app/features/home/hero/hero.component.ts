import { Component, inject, input } from '@angular/core';
import { NavigationComponent } from '../../../layout/navigation/navigation.component';
import { NavigationService } from '../../../layout/navigation/navigation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  navigationService = inject(NavigationService);

  navigationItems = this.navigationService.menu;

  heroTitle = input.required<string>();
}
