import { Component, inject } from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';
import { NgFor } from '@angular/common';
import { SocialsComponent } from '../../shared/socials/socials.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgFor, SocialsComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  navigationService = inject(NavigationService);

  menuItems = this.navigationService.menu;

  get year() {
    return new Date().getFullYear();
  }
}
