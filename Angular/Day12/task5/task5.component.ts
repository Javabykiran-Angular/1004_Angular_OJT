import { Component } from '@angular/core';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.css']
})
export class Task5Component {

  empdata:any[]=[];

  onAdd(id:any,name:any,salary:any){

    let obj={
      empid:id,
      empname:name,
      empsal:salary
    }
    
    this.empdata.push(obj);
    }

    onRemove(myi:any){

      this.empdata.splice(myi,1);
    }



}
