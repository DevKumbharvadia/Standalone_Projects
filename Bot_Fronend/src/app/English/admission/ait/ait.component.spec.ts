import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AITComponent } from './ait.component';

describe('AITComponent', () => {
  let component: AITComponent;
  let fixture: ComponentFixture<AITComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AITComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AITComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
