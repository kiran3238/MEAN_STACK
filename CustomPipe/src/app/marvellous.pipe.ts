import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellous',
  standalone: true
})
export class MarvellousPipe implements PipeTransform 
{
  //{{'Demo' | marvellous :"HEllow":"World":"Angular"}}

  transform(value: unknown, ...args: unknown[]): unknown {
    
    if(args[0]=="PPA"){
      return "Pre-placement activity";
    }if(args[0]=="Angular"){
      return "Angular with Mean Stack";
    }
    return null;
  }

}
