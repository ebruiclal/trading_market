import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailytraderComponent } from './dailytrader.component';

describe('DailytraderComponent', () => {
  let component: DailytraderComponent;
  let fixture: ComponentFixture<DailytraderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailytraderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailytraderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
