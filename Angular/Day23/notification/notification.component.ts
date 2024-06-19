import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit
 {

  msgNotification:string='';

  constructor(private serviceNotify:NotificationService){}
  
  ngOnInit(): void {
   this.getNotificationData();
  }

  getNotificationData(){

    this.serviceNotify.notificationObj
    .subscribe((data)=>{
      this.msgNotification=data;
    })

  }


}
