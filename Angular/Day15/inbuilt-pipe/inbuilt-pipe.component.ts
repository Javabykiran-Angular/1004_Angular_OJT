import { Component } from '@angular/core';

@Component({
  selector: 'app-inbuilt-pipe',
  templateUrl: './inbuilt-pipe.component.html',
  styleUrls: ['./inbuilt-pipe.component.css']
})
export class InbuiltPipeComponent {

  strData:string="Welcome to My angular Module by sumit RaoKHande";

  num2:number=-452.78956324557;

  mydate=new Date();

  myname:string="sumit";

}
