import { TestBed, async, inject } from '@angular/core/testing';

import { AnonGuard } from './anon.guard';

describe('AnonGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnonGuard]
    });
  });

  it('should ...', inject([AnonGuard], (guard: AnonGuard) => {
    expect(guard).toBeTruthy();
  }));
});
