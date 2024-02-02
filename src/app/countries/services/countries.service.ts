import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore = {
    byCapital: {
      term: '',
      countries: [],
    },
    byCountry: {
      term: '',
      countries: [],
    },
    byRegion: {
      region: '',
      countries: [],
    },
  };

  constructor(private http: HttpClient) {}

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(
      catchError(() => of([]))
      // delay(2000),
    );
  }

  searchByCapital(value: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${value}`;
    return this.getCountriesRequest(url).pipe(
      tap((countries) => {
        this.cacheStore.byCapital = {
          term: value,
          countries: countries,
        };
      })
    );
  }

  searchByName(value: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${value}`;
    return this.getCountriesRequest(url).pipe(
      tap((countries) => {
        this.cacheStore.byCountry = {
          term: value,
          countries: countries,
        };
      })
    );
  }

  searchByRegion(value: Region): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${value}`;
    return this.getCountriesRequest(url).pipe(
      tap((countries) => {
        this.cacheStore.byRegion = {
          region: value,
          countries: countries,
        };
      })
    );
  }

  searchById(value: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${value}`;
    return this.http.get<Country[]>(url).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null))
    );
  }
}
