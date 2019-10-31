import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-divoperation',
  templateUrl: './divoperation.component.html',
  styleUrls: ['./divoperation.component.css']
})
export class DivoperationComponent implements OnInit {
  divresult:any;
  
  constructor(private Div:CalculatorService) {
  }

  divInsertOperation(a,b){
    this.divresult = this.Div.divOperation(a,b);
  }

  ngOnInit() {
  }

}
