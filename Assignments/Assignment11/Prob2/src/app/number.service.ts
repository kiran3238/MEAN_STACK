import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  public chkPrime(Num:number):boolean{
    var count:number=0;

    for(var i:number=0;i<=Num;i++){

      if(Num%i==0){
        count++;
      }if(count>2){
        break;
      }

    }
    if(count==2){
      return true;
    }
    return false;
  




  }
}
