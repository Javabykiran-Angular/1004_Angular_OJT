import { Component } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent {

  
  mycolor:string='blue';
  rating:number=2;

  jsonObj={
    color:'blue',
    fontFamily:'Courier New',
    'font-size':"32px",
    padding:"10px"
  }

}
