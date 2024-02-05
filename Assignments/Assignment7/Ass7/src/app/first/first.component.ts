import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
   
  public str1:string="Marvellous Infosystem";
  
  public Display1():void{
    this.str1="Educating for Better Tommarrow";
  }
  public fun():string{
   return this.str1="Marvellous InfoSystem";
  }

 
 

}
