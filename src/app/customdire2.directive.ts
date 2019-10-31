import { Directive, ElementRef, Renderer } from '@angular/core';


@Directive({
  selector: '[appCustomdire2]'
})
export class Customdire2Directive {

  constructor(private el:ElementRef,private renderer:Renderer) {
    renderer.setElementStyle(el.nativeElement,'color','orange');
    //renderer.setElementStyle(el.nativeElement,'backgroundcolor','blue');
    el.nativeElement.style.color='orange';
    el.nativeElement.style.backgroundcolor='yellow';
   }

}
