import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NarendraComponent } from './chary.component';
import { ClassandstylebindComponent } from './classandstylebind/classandstylebind.component';
import { TwowaydatabindComponent } from './twowaydatabind/twowaydatabind.component';
import { CalcoperationComponent } from './calcoperation/calcoperation.component';
import { MyColorDirective } from './calcoperation/mycolor.directive';
import { CustomdirectDirective } from './customdirect.directive';
import { Customdire2Directive } from './customdire2.directive';
import { PipesexampleComponent } from './pipesexample/pipesexample.component';
import { ReverseStringPipe } from './pipesexample/reversestring.pipe';
import { PipecreationexComponent } from './pipecreationex/pipecreationex.component';
import { CalculatorService } from './calculator.service';
import { AddoperationComponent } from './addoperation/addoperation.component';
import { SuboperationComponent } from './suboperation/suboperation.component';
import { MuloperationComponent } from './muloperation/muloperation.component';
import { DivoperationComponent } from './divoperation/divoperation.component';

@NgModule({
  declarations: [
    AppComponent,NarendraComponent, ClassandstylebindComponent, 
    TwowaydatabindComponent, CalcoperationComponent,
    MyColorDirective, CustomdirectDirective, Customdire2Directive, 
    PipesexampleComponent,
    ReverseStringPipe,
    PipecreationexComponent,
    AddoperationComponent,
    SuboperationComponent,
    MuloperationComponent,
    DivoperationComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
