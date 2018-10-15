import { TestBed, async, inject } from '@angular/core/testing';

import { RagnaGuard } from './ragna.guard';

describe('RagnaGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RagnaGuard]
    });
  });

  it('should ...', inject([RagnaGuard], (guard: RagnaGuard) => {
    expect(guard).toBeTruthy();
  }));
});
