import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TrendsService } from './trends.service';

describe('TrendsService', () => {
  let service: TrendsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TrendsService],
    });

    service = TestBed.inject(TrendsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch trends', () => {
    const mockArticles = [
      {
        title: 'Article 1',
        description: 'Description 1',
        url: 'http://example.com/1',
        urlToImage: 'http://example.com/image1.jpg',
      },
      {
        title: 'Article 2',
        description: 'Description 2',
        url: 'http://example.com/2',
        urlToImage: '',
      },
    ];

    service.getTrends().subscribe((articles) => {
      expect(articles.length).toBe(2);
      expect(articles).toEqual(mockArticles);
    });

    const req = httpMock.expectOne(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=99065ca78e9f48bcb7ba6c7e4a2f15df'
    );
    expect(req.request.method).toBe('GET');
    req.flush({ articles: mockArticles });
  });
});
