import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipecreationex',
  templateUrl: './pipecreationex.component.html',
  styleUrls: ['./pipecreationex.component.css']
})
export class PipecreationexComponent implements OnInit {
  public myname:string="mahendra chary";
transform(input:string):string{
  let result:string="";
  for (var i=input.length;i>=0;i--){
    result=result+input.charAt(i);
  }
  return result
}
  constructor() { }

  ngOnInit() {
  }

}
