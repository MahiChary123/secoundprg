import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcoperation',
  templateUrl: './calcoperation.component.html',
  styleUrls: ['./calcoperation.component.css']
})
export class CalcoperationComponent implements OnInit {
addOpp(x:any, y:any){
  alert(x);
  alert(y);
  alert(Number(x)+Number(y));
}
subOpp(x:any, y:any){
  alert(x);
  alert(y);
  alert(x-y);
}
mulOpp(x:any, y:any){
  alert(x);
  alert:(y);
  alert(x*y);
}
divOpp(x:any, y:any){
  alert(x);
  alert(y);
  alert(x/y);
}
  constructor() { }

  ngOnInit() {
  }

}
