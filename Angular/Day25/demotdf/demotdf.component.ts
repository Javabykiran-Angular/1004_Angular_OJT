import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-demotdf',
  templateUrl: './demotdf.component.html',
  styleUrls: ['./demotdf.component.css']
})
export class DemotdfComponent {

  country:any[]=[
    {cid:1,cname:'India'},
    {cid:2,cname:'US'},
    {cid:3,cname:'Japan'}
  ];


  EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
  + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

  onSubmit(f:NgForm){

    console.log("Username:: "+f.value.myusername);
    console.log("Radio Btn:: "+f.value.con);

  }

}
