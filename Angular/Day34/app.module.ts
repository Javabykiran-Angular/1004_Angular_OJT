import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HeaderComponent } from './header/header.component';
import { DetailsComponent } from './details/details.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';

import { ModalModule } from 'ngx-bootstrap/modal';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { FilterPipe } from './filter.pipe';  
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NotfoundComponent,
    HeaderComponent,
    DetailsComponent,
    AddemployeeComponent,
    UpdateemployeeComponent,
    MatConfirmDialogComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ModalModule.forRoot(),
    NgxPaginationModule,
    ToastrModule.forRoot({
      timeOut:5000,
      positionClass:'toast-top-right',
      preventDuplicates:true
    })
  ],
  providers: [Title],
  bootstrap: [AppComponent]

})
export class AppModule { }
