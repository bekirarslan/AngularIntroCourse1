import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IHousingLocation  } from '../ihousing-location';
 import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule,RouterModule],
  template: `
  
    <section>
        <img class="listing-photo"  [src]="hlo.photo"  alt ="Exterior photo of {{hlo.name}}" />
        <h2 class="listing-heading">{{hlo.name}}</h2>
        <p class="listing-location">{{hlo.city}},{{hlo.state}}</p>
        <a [routerLink]="['/details', hlo.id]" >Learn more</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() hlo!:IHousingLocation;
}
