import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css'],
})
export class ByRegionPageComponent implements OnInit {
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  public regionSelected?: Region;
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.regionSelected = this.countriesService.cacheStore.byRegion.region;
  }

  searchByValue(region: Region): void {
    this.regionSelected = region;
    this.countriesService.searchByRegion(region).subscribe((res) => {
      this.countries = res;
    });
  }
}
