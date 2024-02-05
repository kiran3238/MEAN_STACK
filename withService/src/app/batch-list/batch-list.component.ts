import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvellousService } from '../marvellous.service';
@Component({
  selector: 'app-batch-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batch-list.component.html',
  styleUrl: './batch-list.component.css',
  providers :[MarvellousService]
})
export class BatchListComponent {

  public batches:any=[];
  constructor( private obj :MarvellousService){
    this.batches=this.obj.GetBatches();
  }

}
