import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-muloperation',
  templateUrl: './muloperation.component.html',
  styleUrls: ['./muloperation.component.css']
})
export class MuloperationComponent implements OnInit {
  mulresult: any;
  constructor(private mul:CalculatorService) {
      //this.result=this. mul.mulOperation(6,6)
  }

  mulInsertOperation(a,b){
    this.mulresult = this.mul.mulOperation(a,b);
  }
  ngOnInit() {
  }

}
