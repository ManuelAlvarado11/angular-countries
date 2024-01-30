import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css'],
})
export class ByCapitalPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  searchByValue(value: string): void {
    console.log(`Este es el valor a buscar: ${value}`);
  }
}
