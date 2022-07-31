import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { NotificationDialogComponent } from '../views/dialogs/notification-dialog/notification-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private dialog: MatDialog,
  ) { }

  /**
   * displayMessage
   */
  public displayMessage(type, message) {

    const dialogConfigs = new MatDialogConfig();
    dialogConfigs.height = '70px';
    dialogConfigs.width = '650px';
    dialogConfigs.position = {top: '80px'};
    dialogConfigs.panelClass = 'admitCorpseDialog';
    dialogConfigs.data = message;

    if(type == "success"){
      dialogConfigs.width = '500px';
      dialogConfigs.panelClass = ["success", "no-overflow"]
    }else if(type == "error"){
      dialogConfigs.width = '500px';
      dialogConfigs.panelClass = ["error", "no-overflow"]
    }

     // open the dialog
     const dialogRef = this.dialog.open(NotificationDialogComponent, dialogConfigs);

     setTimeout(() => {
       dialogRef.close();
     }, 4000);
    
  }
}
