import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  

addOperation(a,b){return Number(a)+Number(b)}
subOperation(a,b){return a-b}
mulOperation(a,b){return a*b}
divOperation(a,b){return a/b}


  constructor() { }
}
