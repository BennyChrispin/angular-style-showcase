import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrendsComponent } from './trends.component';
import { TrendsService } from '../../services/trends.service';
import { of, throwError } from 'rxjs';

describe('TrendsComponent', () => {
  let component: TrendsComponent;
  let fixture: ComponentFixture<TrendsComponent>;
  let mockTrendsService: Partial<TrendsService>;

  beforeEach(async () => {
    mockTrendsService = {
      getTrends: jest.fn(),
    };

    await TestBed.configureTestingModule({
      declarations: [TrendsComponent],
      providers: [{ provide: TrendsService, useValue: mockTrendsService }],
    }).compileComponents();

    fixture = TestBed.createComponent(TrendsComponent);
    component = fixture.componentInstance;

    // Mock data to be returned by the service
    mockTrendsService.getTrends = jest.fn().mockReturnValue(
      of([
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
        {
          title: 'Article 3',
          description: 'Description 3',
          url: 'http://example.com/3',
          urlToImage: 'http://example.com/image3.jpg',
        },
      ])
    );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display loader while loading', () => {
    component.isLoading = true;
    fixture.detectChanges();
    const loader = fixture.nativeElement.querySelector('.loader');
    expect(loader).toBeTruthy();
  });

  it('should hide loader and display articles after data is loaded', () => {
    component.isLoading = false;
    fixture.detectChanges();
    const loader = fixture.nativeElement.querySelector('.loader');
    const articleCards =
      fixture.nativeElement.querySelectorAll('.article-card');
    expect(loader).toBeFalsy();
    expect(articleCards.length).toBe(3);
  });

  it('should show default image text if no image URL is provided', () => {
    component.isLoading = false;
    fixture.detectChanges();
    const noImageText = fixture.nativeElement.querySelector(
      '.no-image-placeholder'
    );
    expect(noImageText).toBeTruthy();
    expect(noImageText.textContent).toContain('No Image Available');
  });

  it('should call getTrends on TrendsService and populate articles', () => {
    expect(mockTrendsService.getTrends).toHaveBeenCalled();
    expect(component.articles.length).toBe(3);
  });
});
