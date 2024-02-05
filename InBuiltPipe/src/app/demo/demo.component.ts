import { Component } from '@angular/core';
import {CommonModule  } from '@angular/common';//hi line add karay lagteeee 
@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  public Name : string="marvellous infosystems pune";

  public value : number=78.467;

  public today=new Date();

  public Book=//yalaa json mhantat he dispaly kaaraycha asel tr html file madhe bagha

  {
    "Name" :"Learning Angular",
    "Author":"James Peter"
  }
}
