/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FishwatchService } from './fishwatch.service';

describe('Service: Fishwatch', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FishwatchService]
    });
  });

  it('should ...', inject([FishwatchService], (service: FishwatchService) => {
    expect(service).toBeTruthy();
  }));
});
