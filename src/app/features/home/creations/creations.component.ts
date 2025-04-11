import { Component } from '@angular/core';
import { ButtonPrimaryComponent } from '../../../shared/button-primary/button-primary.component';

@Component({
  selector: 'app-creations',
  standalone: true,
  imports: [ButtonPrimaryComponent],
  templateUrl: './creations.component.html',
  styleUrl: './creations.component.scss',
})
export class CreationsComponent {}
