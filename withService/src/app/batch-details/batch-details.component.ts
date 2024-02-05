import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarvellousService } from '../marvellous.service';

@Component({
  selector: 'app-batch-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batch-details.component.html',
  styleUrl: './batch-details.component.css',

  providers :[MarvellousService]
})
export class BatchDetailsComponent {
  //DI haa constructor madhun hoto so constructor lihaa

  public batches:any=[];
  constructor( private obj :MarvellousService){
    this.batches=this.obj.GetBatches();
  }

}
