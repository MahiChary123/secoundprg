import { Directive, ElementRef,  Renderer } from "@angular/core"
@Directive({
    selector:'[appMycolor]'
})
export class MyColorDirective{
    constructor(el:ElementRef,renderer:Renderer){
        //renderer.setElementStyle(el.nativeElement,'color','red');
       renderer.setElementStyle(el.nativeElement,'backgroundcolor','yellow',
    );
el.nativeElement.style.color='blue';
el.nativeElement.style.backgroundcolor='green';
    }
}