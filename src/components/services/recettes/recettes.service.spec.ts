import { TestBed, inject } from '@angular/core/testing';

import { RecettesService } from './recettes.service';

describe('RecettesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecettesService]
    });
  });

  it('should be created', inject([RecettesService], (service: RecettesService) => {
    expect(service).toBeTruthy();
  }));
});
