import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  public cnt:number=0;
  public Result:boolean=false;



  constructor(private obj2:NumberService,private obj3:StringService){
    this.Result=this.obj2.chkPrime(7);
    this.cnt=this.obj3.CountCapital("KiRaN");

     
  }

}
