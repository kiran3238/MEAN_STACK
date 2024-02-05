import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)//apan angular fmwork la sangtoy kuthun chalu hoycha ahee tyachaa ullek ahe yat
//Appcomponenet ch render hoeil pahijee hee sangtaa
  .catch((err) => console.error(err));
