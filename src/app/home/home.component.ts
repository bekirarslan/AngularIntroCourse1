import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { IHousingLocation } from '../ihousing-location';

import { HousingService } from '../housing.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
      <section>
          <form> 
              <input type="text" placeholder="Filter by city" #filter/> <!-- #filter creates template variable. There fore we ahve access to its value field -->
              <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>  
          </form>
      </section>
      <section class="results">       
        <app-housing-location *ngFor="let hl of filteredLocationList"
         [hlo]="hl"></app-housing-location> 
      </section>

  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: IHousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: IHousingLocation[] = [];

  constructor() {
    this.housingService.getAllHousingLocations().then((hl: IHousingLocation[]) => {
      this.housingLocationList = hl;
      this.filteredLocationList = hl;
    })
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList; // when the text parameter is undefined filtered list is set to default list 

    }
    else {
      this.filteredLocationList = this.housingLocationList.filter(
        hl => hl?.city.toLowerCase().includes(text.toLowerCase()) // lowercase
      );
    }
  }
}
