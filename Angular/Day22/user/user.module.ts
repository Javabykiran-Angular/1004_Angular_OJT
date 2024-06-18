import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AdduserComponent } from './adduser/adduser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { DeletuserComponent } from './deletuser/deletuser.component';
import { ListuserComponent } from './listuser/listuser.component';


@NgModule({
  declarations: [
    AdduserComponent,
    UpdateuserComponent,
    DeletuserComponent,
    ListuserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
