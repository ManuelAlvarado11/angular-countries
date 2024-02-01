import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css'],
})
export class ByCapitalPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {}

  searchByValue(value: string): void {
    this.isLoading = true;
    this.countriesService.searchByCapital(value).subscribe((res) => {
      this.countries = res;
      this.isLoading = false;
    });
  }
}
