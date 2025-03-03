import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../../interfaces/housing-location';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [CommonModule, RouterLink],
  templateUrl: './housing-location.component.html',
  standalone: true,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
