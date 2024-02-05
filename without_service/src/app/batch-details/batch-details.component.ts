import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-batch-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batch-details.component.html',
  styleUrl: './batch-details.component.css'
})
export class BatchDetailsComponent
{

  public batches=[
  {"Name":"PPA","Duration":"3 Months","Fees":19500},
  {"Name" :"Logic Building","Duration":"3.5Months","Fees":20500},
  {"Name":"Angular with MEAN","Duration":"3 Months","Fees":19500}
  ];




}
