import { TestBed } from '@angular/core/testing';

import { TrainingsService } from './training.service';

describe('TrainingService', () => {
  let service: TrainingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
