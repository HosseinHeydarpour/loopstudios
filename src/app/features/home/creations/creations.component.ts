import { Component } from '@angular/core';
import { ButtonPrimaryComponent } from '../../../shared/button-primary/button-primary.component';
import { CardComponent } from '../../../shared/card/card.component';
import { NgFor, SlicePipe } from '@angular/common';

interface Projcet {
  title: string;
  desktopImg: string;
  mobileImg: string;
}

@Component({
  selector: 'app-creations',
  standalone: true,
  imports: [ButtonPrimaryComponent, CardComponent, NgFor, SlicePipe],
  templateUrl: './creations.component.html',
  styleUrl: './creations.component.scss',
})
export class CreationsComponent {
  projects: Projcet[] = [
    {
      title: 'Deap Earth',
      desktopImg: 'images/desktop/image-deep-earth.jpg',
      mobileImg: 'images/mobile/image-deep-earth.jpg',
    },
    {
      title: 'Night Arcade',
      desktopImg: 'images/desktop/image-night-arcade.jpg',
      mobileImg: 'images/mobile/image-night-arcade.jpg',
    },
    {
      title: 'Soccer TeaM VR',
      desktopImg: 'images/desktop/image-soccer-team.jpg',
      mobileImg: 'images/mobile/image-soccer-team.jpg',
    },
    {
      title: 'The Grid',
      desktopImg: 'images/desktop/image-grid.jpg',
      mobileImg: 'images/mobile/image-grid.jpg',
    },
    {
      title: 'From above vr',
      desktopImg: 'images/desktop/image-from-above.jpg',
      mobileImg: 'images/mobile/image-from-above.jpg',
    },
    {
      title: 'Pocket Borealis',
      desktopImg: 'images/desktop/image-pocket-borealis.jpg',
      mobileImg: 'images/mobile/image-pocket-borealis.jpg',
    },
    {
      title: 'The Curiosity',
      desktopImg: 'images/desktop/image-curiosity.jpg',
      mobileImg: 'images/mobile/image-curiosity.jpg',
    },
    {
      title: 'Make It Fisheye',
      desktopImg: 'images/desktop/image-fisheye.jpg',
      mobileImg: 'images/mobile/image-fisheye.jpg',
    },
  ];
}
