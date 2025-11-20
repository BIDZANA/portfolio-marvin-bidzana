import { ComponentFixture, TestBed } from '@angular/core/testing';
import { About } from './about';
import { By } from '@angular/platform-browser';

describe('About', () => {
  let component: About;
  let fixture: ComponentFixture<About>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About]
    })
    .compileComponents();

    fixture = TestBed.createComponent(About);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ensure timeline events are populated', () => {
    expect(component.timelineEvents.length).toBeGreaterThan(0);
    expect(component.timelineEvents[0].company).toBe('APCAF'); // Vérifie que le bénévole est le 1er
  });
  
  it('should return correct icon for work type', () => {
    expect(component.getIcon('work')).toBe('💼');
  });
});