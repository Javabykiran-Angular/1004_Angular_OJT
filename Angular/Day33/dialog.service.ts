import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog:MatDialog) { }

  OpenConfirmDialog(msg:string){
    return this.dialog.open(MatConfirmDialogComponent,{
       width:'490px',
       panelClass:'confirm-dialog-container', 
     //Panel class is used to allow our customize dialog box to apply css & make it as custom
       disableClose:true,
       position:{top:"35vh"},
       data:{
        message:msg
      }
      
     })
     }

}
