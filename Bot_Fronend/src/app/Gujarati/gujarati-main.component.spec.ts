import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GujaratiMainComponent } from './gujarati-main.component';

describe('GujaratiMainComponent', () => {
  let component: GujaratiMainComponent;
  let fixture: ComponentFixture<GujaratiMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GujaratiMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GujaratiMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
