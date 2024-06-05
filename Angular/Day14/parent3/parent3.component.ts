import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Child3Component } from '../child3/child3.component';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.css']
})
export class Parent3Component implements AfterViewInit {


@ViewChild("mydiv") divaccess!:ElementRef<HTMLDivElement>;

@ViewChild(Child3Component)  childAccess!:Child3Component;


ngAfterViewInit(): void {
  console.log(this.divaccess);
  
  // let random = Math.floor(Math.random() * (999999 - 100000)) + 100000;
  // console.log(random);

  // this.divaccess.nativeElement.className="mydivclass"+random;

  this.divaccess.nativeElement.className="divclass";
}

onAccessProp(){
  this.childAccess.username="Sumit Raokhande";
}

onAccessMethod(){
  this.childAccess.onAlert();
}

onIncrement(){
  this.childAccess.increment();
}

onDecrement(){
  this.childAccess.decrement();
}


}
