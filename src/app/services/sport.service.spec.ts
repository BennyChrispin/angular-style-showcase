import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { SportService } from './sport.service';

describe('SportService', () => {
  let service: SportService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SportService],
    });

    service = TestBed.inject(SportService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch sports news', () => {
    const mockArticles = [
      {
        title: 'Sport Article 1',
        description: 'Description 1',
        url: 'http://example.com/1',
        urlToImage: 'http://example.com/image1.jpg',
      },
      {
        title: 'Sport Article 2',
        description: 'Description 2',
        url: 'http://example.com/2',
        urlToImage: '',
      },
    ];

    service.getSportsNews().subscribe((articles) => {
      expect(articles.length).toBe(2);
      expect(articles).toEqual(mockArticles);
    });

    const req = httpMock.expectOne(
      'https://newsapi.org/v2/top-headlines?category=sports&apiKey=99065ca78e9f48bcb7ba6c7e4a2f15df'
    );
    expect(req.request.method).toBe('GET');
    req.flush({ articles: mockArticles });
  });
});
