import { TestBed } from '@angular/core/testing';

import { CalcServService } from './calc-serv.service';

describe('CalcServService', () => {
  let service: CalcServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
