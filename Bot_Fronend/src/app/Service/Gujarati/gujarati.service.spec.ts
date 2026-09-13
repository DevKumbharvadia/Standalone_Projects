import { TestBed } from '@angular/core/testing';

import { GujaratiService } from './gujarati.service';

describe('GujaratiService', () => {
  let service: GujaratiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GujaratiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
