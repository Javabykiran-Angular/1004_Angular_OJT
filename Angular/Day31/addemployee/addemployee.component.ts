import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor(private service:HttpService,
              private router:Router
  ){}
  ngOnInit(): void {
    this.getcountries();
  }

  allCountry:any[]=[];

  getcountries(){
    this.service.getAllCountry()
    .subscribe((response:any)=>{
      this.allCountry=response;
    })
  }

  onSubmit(f:NgForm){
    let obj={
      name:f.value.name,
      phoneno:f.value.phoneno,
      department:f.value.department,
      status:f.value.status,
      country:{
        cid:f.value.country.cid,
        cname:f.value.country.cname
      },
      createddtm:Date.now(),
      createdby:sessionStorage.getItem("username"),
      updateddtm:Date.now(),
      updatedby:sessionStorage.getItem("username")
    }

    this.service.saveRecord(obj)
    .subscribe((response)=>{
      // console.log(response);
      this.router.navigate(['/home']);
    })

  }
}
