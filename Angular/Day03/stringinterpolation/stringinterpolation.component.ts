import { Component } from '@angular/core';

@Component({
  selector: 'app-stringinterpolation',
  templateUrl: './stringinterpolation.component.html',
  styleUrls: ['./stringinterpolation.component.css']
})
export class StringinterpolationComponent {

  
  name:string='Sumit Raokhande';
  imgUrl:string="../../assets/images/bg.jpeg";

  num:number=4;

  getname(){
    return this.name;
  }

}
