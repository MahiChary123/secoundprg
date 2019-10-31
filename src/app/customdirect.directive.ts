import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomdirect]'
})
export class CustomdirectDirective {

  constructor(private el:ElementRef,private renderer:Renderer) {
    renderer.setElementStyle(el.nativeElement,'backgroundcolor','green');
   }
@HostListener('mouseover')myMouseOver(){
  this.renderer.setElementStyle(this.el.nativeElement,'background','orange');

}
@HostListener('mouseleave')myMouseLeave(){
  this.renderer.setElementStyle(this.el.nativeElement,'background','blue');
}

}
