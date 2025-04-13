import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './features/home/hero/hero.component';
import { FeaturesComponent } from './features/home/features/features.component';
import { CreationsComponent } from './features/home/creations/creations.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { NavigationService } from './layout/navigation/navigation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeroComponent,
    FeaturesComponent,
    CreationsComponent,
    FooterComponent,
    NavigationComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'loopstudios-website';

  navigationService = inject(NavigationService);

  navigationItems = this.navigationService.menu;
}
