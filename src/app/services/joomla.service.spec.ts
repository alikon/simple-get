import { TestBed } from '@angular/core/testing';

import { JoomlaService } from './joomla.service';

describe('JoomlaService', () => {
  let service: JoomlaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoomlaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
