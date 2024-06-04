import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

  @Output() childStrEvent=new EventEmitter();

  @Output() childArrEvent=new EventEmitter();

  childStrData:string='Hopes so u R Enjoying this module...';


  arrProduct=[
    {
      name:"OnePlus",
      price:45000,
      qty:1
    },
    {
      name:"Samsung",
      price:25000,
      qty:1
    },
    {
      name:"RealMe",
      price:18000,
      qty:1
    },
    {
      name:"Motorolla",
      price:30000,
      qty:1
    }
  ];

  @Input() parent2Date!:any;

  onSend(){
    this.childStrEvent.emit(this.childStrData);
   
    this.childArrEvent.emit(this.arrProduct);
  }


}
