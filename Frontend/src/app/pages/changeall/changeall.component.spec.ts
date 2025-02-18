import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeallComponent } from './changeall.component';

describe('ChangeallComponent', () => {
  let component: ChangeallComponent;
  let fixture: ComponentFixture<ChangeallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
