import 'core-js';

import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy'; // since zone.js 0.6.15
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch'; // must after import sync-test

import 'rxjs';

import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';


declare var require;


let testsContext = require.context('../src/', true, /spec\.ts$/);
testsContext.keys().forEach(testsContext);

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

