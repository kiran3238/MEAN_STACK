import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfosystemsRoutingModule } from './infosystems-routing.module';
import { ThirdComponent } from './third/third.component';


@NgModule({
  declarations: [
    ThirdComponent
  ],
  imports: [
    CommonModule,
    InfosystemsRoutingModule
  ],
  ///exportt karavaaa lagtaaaa 
  exports :[
    ThirdComponent
  ]
})
export class InfosystemsModule { }
