import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  // notificationObj=new Subject<string>();
  notificationObj=new BehaviorSubject<string>("Hi welcome");

  constructor() { }

  sendMessage(msg:string){
      this.notificationObj.next(msg);

  }



}
