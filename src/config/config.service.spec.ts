/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { AppConfig } from './config.service';

describe('Config Service', () => {
  beforeEachProviders(() => [AppConfig]);

  it('should ...',
      inject([AppConfig], (service: AppConfig) => {
    expect(service).toBeTruthy();
  }));
});
