import { Component, OnInit } from '@angular/core';
import { TrendsService } from '../../services/trends.service';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss'],
})
export class TrendsComponent implements OnInit {
  articles: any[] = [];
  isLoading = true;

  constructor(private trendsService: TrendsService) {}

  ngOnInit(): void {
    this.trendsService.getTrends().subscribe({
      next: (data) => {
        this.articles = data;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }
}
