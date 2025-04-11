import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './features/home/hero/hero.component';
import { FeaturesComponent } from './features/home/features/features.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroComponent, FeaturesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'loopstudios-website';
}
