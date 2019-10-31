import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaydatabind',
  templateUrl: './twowaydatabind.component.html',
  styleUrls: ['./twowaydatabind.component.css'] 
})
export class TwowaydatabindComponent implements OnInit {
public C1:boolean=true;
public C2:boolean=true;
public col:string="red";
public font:string="30px";
  constructor() { }

  ngOnInit() {
  }

}
