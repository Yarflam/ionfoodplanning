import { TestBed, inject } from '@angular/core/testing';

import { SemainesService } from './semaines.service';

describe('SemainesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SemainesService]
    });
  });

  it('should be created', inject([SemainesService], (service: SemainesService) => {
    expect(service).toBeTruthy();
  }));
});
