/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PodcastsService } from './services/podcasts.service';

describe('Service: Getpodcasts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PodcastsService]
    });
  });

  it('should ...', inject([PodcastsService], (service: PodcastsService) => {
    expect(service).toBeTruthy();
  }));
});
