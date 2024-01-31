import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css'],
})
export class ByRegionPageComponent implements OnInit {
  public countries: Country[] = [];
  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {}

  searchByValue(value: string): void {
    this.countriesService.searchByRegion(value).subscribe((res) => {
      this.countries = res;
    });
  }
}
