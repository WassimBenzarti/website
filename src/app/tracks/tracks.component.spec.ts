/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TracksComponent } from './tracks.component';

describe('Component: Tracks', () => {
  it('should create an instance', () => {
    let component = new TracksComponent();
    expect(component).toBeTruthy();
  });
});
