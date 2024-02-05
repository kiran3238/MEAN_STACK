import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MarvellousService } from './marvellous.service';
import { HttpClientModule } from '@angular/common/http';//yane connection honar aheee
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    MarvellousService//bcz DI
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
