import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipesexample',
  templateUrl:'./pipesexample.component.html' ,
  styleUrls: ['./pipesexample.component.css']
})
export class PipesexampleComponent implements OnInit {
public myname:string="mahendra chary";
public mynumber:number=12.657565675;
public mynumber2:number=0.5;
public myprice:number=500.34;
public myamount:number=0.123345;
public mydate:any=new Date();
public mydate2:any=new Date(1992,18,8);
person:object={'name':'Mahi','age':'27'}
  constructor() { }

  ngOnInit() {
  }

}
