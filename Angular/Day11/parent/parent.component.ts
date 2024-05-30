import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  strData:string="Send data from Parent to Child ";

  arr:string[]=[];

  jsondata={
    id:9,
    fname:"Sumit",
    lname:"Raokhande"
  }



  onSendData(){
    this.arr=['Core Java','Spring','Spring Boot','Html','Angular']
  }

}
