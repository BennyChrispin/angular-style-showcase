import { Component, OnInit } from '@angular/core';
import { SportService } from '../../services/sport.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss'],
})
export class SportComponent implements OnInit {
  sportsNews: any[] = [];
  isLoading = true;

  constructor(private sportService: SportService) {}

  ngOnInit(): void {
    this.sportService.getSportsNews().subscribe((data) => {
      console.log('Received data:', data);
      this.sportsNews = data;
      this.isLoading = false;

      this.sportsNews.forEach((news) => {
        console.log('Image URL:', news.urlToImage);
      });
    });
  }
}
