import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
//this is used file for module module are not interact with user
//jyaa file independly file run hot nahit tyala spec.ts file nastee .ts
