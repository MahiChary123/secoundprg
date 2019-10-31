import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classandstylebind',
  templateUrl:'./classandstylebind.component.html' ,
  styleUrls: ['./classandstylebind.component.css']
})
export class ClassandstylebindComponent implements OnInit {
public showElement:boolean=true;
public course:string="angular";
public names:string[]=['Mahi','Chary','Naresh','Shiva'];

  constructor() { }

  ngOnInit() {
  }

}
