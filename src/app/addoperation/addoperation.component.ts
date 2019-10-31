import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-addoperation',
  templateUrl: './addoperation.component.html',
  styleUrls: ['./addoperation.component.css']
})
export class AddoperationComponent implements OnInit {
  AddResult:any;
  constructor(private add:CalculatorService) { }

     //this.AddResult=this.add.addOpperation()
     addInsertOperation(a,b){
    this.AddResult=this.add.addOperation(a,b)
  }

  ngOnInit() {
  }

}
