import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-new-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-comp.component.html',
  styleUrl: './new-comp.component.css'
})
export class NewCompComponent {

  public Name :string="Marvellous";

}
