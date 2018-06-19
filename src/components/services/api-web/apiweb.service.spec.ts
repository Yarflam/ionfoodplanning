import { TestBed, inject } from '@angular/core/testing';

import { ApiWebService } from './apiweb.service';

describe('ApiWebService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiWebService]
    });
  });

  it('should be created', inject([ApiWebService], (service: ApiWebService) => {
    expect(service).toBeTruthy();
  }));
});
