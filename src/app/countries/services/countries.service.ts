import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) {}

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(
      catchError(() => of([])),
      delay(2000)
    );
  }

  searchByCapital(value: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${value}`;
    return this.getCountriesRequest(url);
  }

  searchByName(value: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${value}`;
    return this.getCountriesRequest(url);
  }

  searchByRegion(value: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${value}`;
    return this.getCountriesRequest(url);
  }

  searchById(value: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${value}`;
    return this.http.get<Country[]>(url).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null))
    );
  }
}
