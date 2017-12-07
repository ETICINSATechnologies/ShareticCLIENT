import { TestBed, inject } from '@angular/core/testing';

import { FormationService } from './formation.service';
import {HttpClientModule} from '@angular/common/http';

describe('FormationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormationService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([FormationService], (service: FormationService) => {
    expect(service).toBeTruthy();
  }));
});
