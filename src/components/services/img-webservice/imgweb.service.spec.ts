import { TestBed, inject } from '@angular/core/testing';

import { ImgWebService } from './imgweb.service';

describe('ImgWebService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImgWebService]
    });
  });

  it('should be created', inject([ImgWebService], (service: ImgWebService) => {
    expect(service).toBeTruthy();
  }));
});
