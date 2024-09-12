import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environment/environment';
import { TrendsService } from '../../services/trends.service';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss'],
})
export class TrendsComponent implements OnInit {
  articles: any[] = [];
  isLoading = true;
  canDisplayContent = !environment.production;

  constructor(private trendsService: TrendsService) {}

  ngOnInit(): void {
    this.trendsService.getTrends().subscribe({
      next: (data) => {
        this.articles = data;
        this.isLoading = false;
        this.canDisplayContent = true;
      },
      error: () => {
        this.isLoading = false;
        this.canDisplayContent = false;
      },
    });
  }
}
