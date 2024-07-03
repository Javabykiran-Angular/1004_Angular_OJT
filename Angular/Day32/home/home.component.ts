import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpService } from '../http.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Employee } from '../utility/employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  empData:any[]=[];
isradidoCheck:boolean=false;
modalRef!: BsModalRef; 
empObj:Employee=<Employee>{};

config = {
  animated: true,
  
  ignoreBackdropClick: true,
  class: "alert alert-danger"
};
  constructor(private service:HttpService,
    private modalservice:BsModalService
  ){}

ngOnInit(): void {
  this.getDataFromBackend();
}

getDataFromBackend(){
    this.service.getAllRecord()
    .subscribe((response:any)=>{
      // console.log(response);
      this.empData=response;
    })
}

onUpdate(popUp:TemplateRef<any>){
  if(this.radioBtnCheck()){
    // display the pop up box
    this.modalRef = this.modalservice.show(        
      popUp, this.config);
  }else{
    alert("Please Select the Record to be Updatted")
  }
}

radioBtnCheck(){
    if(this.isradidoCheck)
      return true;
    else 
    return false;
}

onEdit(item:any){
  this.isradidoCheck=true;
  this.empObj=item;
  // console.log(this.empObj);
}

}
