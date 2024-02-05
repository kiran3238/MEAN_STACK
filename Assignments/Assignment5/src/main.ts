import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { FirstCompComponent } from './app/first-comp/first-comp.component';
import { importProvidersFrom } from '@angular/core';
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
