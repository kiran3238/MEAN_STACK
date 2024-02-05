import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringService } from '../string.service';
@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  providers:[StringService]
})
export class Child2Component {
  public cnt:number=0;
  constructor(private obj1 :StringService){
     //var str1:string="Kiran";
    this.cnt=this.obj1.CountCapital("KirAn");
  }

}
