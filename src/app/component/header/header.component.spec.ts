import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle dark mode and update localStorage', () => {
    // Check initial state
    expect(component.isDarkMode).toBe(false);
    expect(localStorage.getItem('theme')).toBe('light');
    expect(document.body.classList.contains('dark-mode')).toBe(false);

    // Trigger toggle
    const button = debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    // Check updated state
    expect(component.isDarkMode).toBe(true);
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(document.body.classList.contains('dark-mode')).toBe(true);

    // Trigger toggle again
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    // Check reverted state
    expect(component.isDarkMode).toBe(false);
    expect(localStorage.getItem('theme')).toBe('light');
    expect(document.body.classList.contains('dark-mode')).toBe(false);
  });

  it('should correctly update the image source based on dark mode', () => {
    const imgElement: HTMLImageElement = debugElement.query(
      By.css('img')
    ).nativeElement;

    // Check initial image source
    expect(imgElement.src).toContain('icon-sun.svg');

    component.toggleDarkMode();
    fixture.detectChanges();

    expect(imgElement.src).toContain('icon-moon.svg');

    component.toggleDarkMode();
    fixture.detectChanges();

    expect(imgElement.src).toContain('icon-sun.svg');
  });
});
