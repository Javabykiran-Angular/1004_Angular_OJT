import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding2',
  templateUrl: './eventbinding2.component.html',
  styleUrls: ['./eventbinding2.component.css']
})
export class Eventbinding2Component {

  result:number=0;

  // onAddition(num1:string,num2:string){

  onAddition(num1:any,num2:any){

    let n1=+num1;
    let n2=+num2;

  //  this.result=num1+num2; 

  this.result=n1+n2; 
  }

  onChange(data:string){
    console.log("on Change Event Occur...");

    if(data.length>5){
      alert("U exceed character over 5...");
    }

  }

}
