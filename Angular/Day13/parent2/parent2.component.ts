import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component {

  childStrdataReceived:string='';

  childArrDataReceived:any[]=[];

  @Input() appDatedata!:any;


}
