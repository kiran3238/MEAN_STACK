import { Directive, ElementRef,HostListener } from '@angular/core';
//elementref ha color change karto
//Hostlistener haaaa mouse halavnyasathi alaaa 
@Directive({
  selector: '[appMarvellous]',
  standalone: true
})
export class MarvellousDirective {

  constructor(private obj : ElementRef) { 

    console.log("Inside Directives Constructor");
  }
  @HostListener ('mouseenter') onmouseenter()
  {
    this.obj.nativeElement.style.background ='blue';

  }
  @HostListener ('mouseleave') onmouseleave()
  {
    this.obj.nativeElement.style.background ='red';

  }

}
