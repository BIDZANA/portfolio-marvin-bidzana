import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hobbies } from './hobbies';

describe('Hobbies', () => {
  let component: Hobbies;
  let fixture: ComponentFixture<Hobbies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hobbies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hobbies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display 3 hobbies', () => {
    expect(component.hobbies.length).toBe(3);
  });

  it('should have Football as the first hobby', () => {
    expect(component.hobbies[0].title).toContain('Football');
  });
});