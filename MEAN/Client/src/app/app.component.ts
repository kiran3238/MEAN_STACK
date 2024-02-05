import { Component } from '@angular/core';
//DI
import { MarvellousService } from './marvellous.service';
import { OnInit } from '@angular/core';//interface sathii

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit//Life cycle hooks mhantat yalaa tyatil oninit method ahee ti automatic call hote when component create Rollback function
{
  Message :any;//hii ti kapadii pishavi ahee
  constructor (private service : MarvellousService)//DI vaprun Marvellous laa inject karun ghetalaa 
  {}
  ngOnInit()//tu internally get Batches laa call karay sangto
  {
    this.service.getBatches().subscribe(data=>{//like a milk chii service subscribe keli ahee means roj dudh yetoo according their time tyachi vat baghavi lagel not a tumhi dukanatun anat
     //but it works asynchronously means te yet nahi toparyant work karaych rahat nahii
      this.Message=data;//data haa dudhachi pishavi ahee
    })
  }
}
