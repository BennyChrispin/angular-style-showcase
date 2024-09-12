import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class SportService {
  private apiUrl = 'https://newsapi.org/v2/top-headlines?category=sports';
  private apiKey = environment.newsApiKey;

  constructor(private http: HttpClient) {}

  getSportsNews(): Observable<any> {
    const url = `${this.apiUrl}&apiKey=${this.apiKey}`;
    return this.http.get<any>(url).pipe(map((response) => response.articles));
  }
}
