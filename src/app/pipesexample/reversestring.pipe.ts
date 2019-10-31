import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name:'reversestring'})
export class ReverseStringPipe implements PipeTransform{
    public myname:string="mahichary";
    transform(input:string):string{
        let result:string="";
        for (var i=input.length;i>=0;i--){
            result=result+input.charAt(i);
        }
        return result;
    }
}