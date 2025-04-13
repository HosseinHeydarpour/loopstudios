import { Component } from '@angular/core';

@Component({
  selector: 'app-socials',
  standalone: true,
  imports: [],
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.scss',
  host: {
    class: 'flex items-center justify-center mx-auto space-x-4 md:justify-end',
  },
})
export class SocialsComponent {}
