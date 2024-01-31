import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) {}

  searchByCapital(value: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${value}`;
    return this.http.get<Country[]>(url).pipe(catchError(() => of([])));
  }

  searchByName(value: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${value}`;
    return this.http.get<Country[]>(url).pipe(catchError(() => of([])));
  }

  searchByRegion(value: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${value}`;
    return this.http.get<Country[]>(url).pipe(catchError(() => of([])));
  }
}
