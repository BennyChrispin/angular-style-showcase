import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SportComponent } from './sport.component';
import { SportService } from '../../services/sport.service';
import { of } from 'rxjs';

describe('SportComponent', () => {
  let component: SportComponent;
  let fixture: ComponentFixture<SportComponent>;
  let mockSportService: Partial<SportService>;

  beforeEach(async () => {
    mockSportService = {
      getSportsNews: jest.fn().mockReturnValue(
        of([
          {
            title: 'News 1',
            description: 'Description 1',
            url: 'http://example.com/1',
            urlToImage: 'http://example.com/image1.jpg',
          },
          {
            title: 'News 2',
            description: 'Description 2',
            url: 'http://example.com/2',
            urlToImage: '',
          },
          {
            title: 'News 3',
            description: 'Description 3',
            url: 'http://example.com/3',
            urlToImage: 'http://example.com/image3.jpg',
          },
        ])
      ),
    };

    await TestBed.configureTestingModule({
      declarations: [SportComponent],
      providers: [{ provide: SportService, useValue: mockSportService }],
    }).compileComponents();

    fixture = TestBed.createComponent(SportComponent);
    component = fixture.componentInstance;
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

  it('should hide loader and display news after data is loaded', () => {
    component.isLoading = false;
    fixture.detectChanges();
    const loader = fixture.nativeElement.querySelector('.loader');
    const sportsCards = fixture.nativeElement.querySelectorAll('.sports-card');
    expect(loader).toBeFalsy();
    expect(sportsCards.length).toBe(3);
  });

  it('should show default image text if no image URL is provided', () => {
    component.isLoading = false;
    fixture.detectChanges();
    const defaultImageText =
      fixture.nativeElement.querySelector('.default-image');
    expect(defaultImageText).toBeTruthy();
    expect(defaultImageText.textContent).toContain('No Image Available');
  });

  it('should call getSportsNews on SportService and populate sportsNews', () => {
    expect(mockSportService.getSportsNews).toHaveBeenCalled();
    expect(component.sportsNews.length).toBe(3);
  });
});
