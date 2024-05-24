import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding3',
  templateUrl: './eventbinding3.component.html',
  styleUrls: ['./eventbinding3.component.css']
})
export class Eventbinding3Component {

  result:number=0;
  name:string='';
  
  onKeyUp(){
    console.log("Key Up event Occur..");
  }

  onKeyDown(){
    console.log("Key Down event Occur...")
  }

  onKeyEnter(){
    console.log("Key enter is occur...")
  }

}
