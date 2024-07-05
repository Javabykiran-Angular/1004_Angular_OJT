import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpService } from '../http.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Employee } from '../utility/employee';
import { DialogService } from '../dialog.service';
import { ToastrService  } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';

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

nameSearch:string='';
p:number=1;

config = {
  animated: true,
  
  ignoreBackdropClick: true,
  class: "alert alert-danger"
};
  constructor(private service:HttpService,
    private modalservice:BsModalService,
    private dialogservice:DialogService,
    private toaster:ToastrService,
    private title:Title
  ){}

ngOnInit(): void {
  this.getDataFromBackend();
  this.title.setTitle("Dashboard | project")
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
    // alert("Please Select the Record to be Updatted")
    this.toaster.warning("Please Select the Record to be Updatted")
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

onDelete(){
  if(this.radioBtnCheck()){
    // delete the Record flow
    this.dialogservice.OpenConfirmDialog('Are you sure to delete this record?')
    .afterClosed()
    .subscribe((result)=>{
      console.log(result);
        if(result){
          //delete a record
          this.service.deleteRecord(this.empObj.id)
          .subscribe((respose)=>{
            console.log(respose);
            this.getDataFromBackend();
            
          })
        }else{
          alert("Record is not deleted...")
        }
    })
    
  }else{
    // alert("Please Select the Record to be Deleted")
    this.toaster.error("Please Select the Record to be Deleted")
  }
}

}
