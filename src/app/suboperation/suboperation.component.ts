import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-suboperation',
  templateUrl: './suboperation.component.html',
  styleUrls: ['./suboperation.component.css']
})
export class SuboperationComponent implements OnInit {
  SubResult: any;

  constructor(private sub:CalculatorService) {
   // this.result=this. sub.subOpp()
   }

   SubInstOpp(a,b){
     this.SubResult=this.sub.subOperation(a,b)
}


  ngOnInit() {
  }

}
