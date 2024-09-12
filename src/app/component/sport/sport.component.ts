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
  isRestricted = false;

  constructor(private sportService: SportService) {}

  ngOnInit(): void {
    this.sportService.getSportsNews().subscribe({
      next: (data) => {
        console.log('Received data:', data);
        this.sportsNews = data;
        if (data.status === 'error' && data.message.includes('restricted')) {
          this.isRestricted = true;
        }

        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.isRestricted = true;
      },
    });
  }
}
