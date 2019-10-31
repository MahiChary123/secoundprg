import { Component } from '@angular/core';
@Component({
    selector:'narendra-component',
    template:`<div [class.myclass]="applyclass">Apply Class Binding</div>
    <div [style.color]="applyclass?'green':'red'">Apply Style Binding</div>
    `,
    styles:[`.myclass{color:orange;}`]
})
export class NarendraComponent{
public applyclass=true;
public applystyle=true;
}