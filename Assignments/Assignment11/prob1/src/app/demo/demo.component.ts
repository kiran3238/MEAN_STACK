import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers :[ArithmeticService]
})
export class DemoComponent {

  Result1:number=0;
  Result2:number=0;

  constructor(private obj:ArithmeticService){

    this.Result1=this.obj.Add(10,20);
    this.Result2=this.obj.Sub(20,10);
  }

 

}
