import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarvellousService {

  constructor() { }
  GetBatches()
  {
    return[
      {"Name":"PPA","Duration":"3Months","Fees":19500},
      {"Name":"Logic Building","Duration":"3.5Months","Fees":20500},
      {"Name":"Java With DSA","Duration":"4Months","Fees":19500},
      {"Name":"Python","Duration":"3Months","Fees":19500}
    ];
  }
}
