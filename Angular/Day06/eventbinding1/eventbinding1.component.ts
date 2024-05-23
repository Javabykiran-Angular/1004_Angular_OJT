import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding1',
  templateUrl: './eventbinding1.component.html',
  styleUrls: ['./eventbinding1.component.css']
})
export class Eventbinding1Component {

  count:number=0;  
  isDissabled:boolean=false;

  onClick(){
    if(this.count==0){
      console.log("Click event Occur...");
      this.count++;
    }
   
  }

  onClick1(){
    console.log("Click event Occur...");
    this.isDissabled=true;
  }

  onImageClick(){
    console.log("on Image Click ");
  }

  onDollerEvent(myevent:any){

    console.log(myevent);

    console.log(myevent.target.value);

  }

  onSend(myinput:any){
    console.log(myinput);
    console.log("Data => "+myinput.value);
    myinput.style.background='green';
    myinput.style.color='white'
  }

  onSend1(myvalue:any){

    console.log(myvalue);
  }

}
