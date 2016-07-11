/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { SoundcloudComponent } from './soundcloud.component';

describe('Component: Soundcloud', () => {
  it('should create an instance', () => {
    let component = new SoundcloudComponent();
    expect(component).toBeTruthy();
  });
});
