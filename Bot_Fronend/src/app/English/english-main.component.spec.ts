import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishMainComponent } from './english-main.component';

describe('EnglishMainComponent', () => {
  let component: EnglishMainComponent;
  let fixture: ComponentFixture<EnglishMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnglishMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglishMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
