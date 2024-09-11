import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SportService {
  private apiUrl = 'https://api.nytimes.com/svc/topstories/v2/sports.json';
  private apiKey = 'YOUR_NYTIMES_API_KEY';

  constructor(private http: HttpClient) {}

  getSportsNews(): Observable<any> {
    const url = `${this.apiUrl}?api-key=${this.apiKey}`;
    return this.http.get<any>(url).pipe(map((response) => response.results));
  }
}
