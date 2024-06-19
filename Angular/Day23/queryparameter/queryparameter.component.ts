import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-queryparameter',
  templateUrl: './queryparameter.component.html',
  styleUrls: ['./queryparameter.component.css']
})
export class QueryparameterComponent implements OnInit
{

  myjson:any={};
  
  notificationData:string='';

    constructor(private route:ActivatedRoute,
                private notifyService:NotificationService ){

    }

  ngOnInit(): void {
    this.getDataFromUrl();
    this.getNotificationData();
  }


  getNotificationData(){
    this.notifyService.notificationObj
    .subscribe((data)=>{
        this.notificationData=data;
    })
  }


  getDataFromUrl(){
    this.route.queryParamMap
    .subscribe((param:any)=>{
      this.myjson.id=+param.get("id");
      this.myjson.fname=param.get("fname");
      this.myjson.lname=param.get("lname");
    })
  }

  onSend(msg:string){
    this.notifyService.sendMessage(msg);
  }

}
