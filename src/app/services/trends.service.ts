import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TrendsService {
  private apiUrl = 'https://newsapi.org/v2/top-headlines';
  private apiKey = '99065ca78e9f48bcb7ba6c7e4a2f15df';

  constructor(private http: HttpClient) {}

  getTrends(): Observable<any> {
    const url = `${this.apiUrl}?country=us&apiKey=${this.apiKey}`;
    return this.http.get<any>(url).pipe(map((response) => response.articles));
  }
}
