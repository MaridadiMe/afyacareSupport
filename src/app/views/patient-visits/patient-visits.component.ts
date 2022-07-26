import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ManagementService } from 'src/app/services/management.service';
import { Observable, Subscription } from "rxjs";
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-patient-visits',
  templateUrl: './patient-visits.component.html',
  styleUrls: ['./patient-visits.component.css']
})
export class PatientVisitsComponent implements OnInit, OnDestroy {

  constructor(
    private managementService: ManagementService,
    private messageService: MessageService, 
    private dialog: MatDialog) { }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void{
    this.patients$.unsubscribe();
    this.visitManage$.unsubscribe();
  }

  patient_MRN = '';
  patients: any [] = [];
  patient_visits : any[] = [];
  patient : any = {};
  visit_to_manage:  any = {};
  visit_action: string = '';
  visit_action_reason: string = '';

  private patients$! : Subscription;
  private visitManage$! : Subscription;
  dialogRef: MatDialogRef<any>;

  patientInformationColumns: string[] = ['No.', 'Name', 'Sex', 'Identifier', 'Action'];
  patientVisitColumns: string[] = ['No.', 'Type', 'Date Started', 'Date Stopped', 'Status', 'Action'];

  manage_patient_visits : boolean = false;

  getPatientInformationByMRN(){
    this.patients$ = this.managementService.getPatientPatientByMRN(this.patient_MRN).subscribe((response: any)=>{
      this.manage_patient_visits = false;
      this.patients = [];
      if(response.length > 0 && response != 'empty'){
        this.patients = response;
      }
    },
    (error)=>{
      console.log('error')
    });    
  }

  manage_visits(patient){
    this.manage_patient_visits = true;
    this.patient = patient;
    this.patient_visits = patient.patientVisit? patient.patientVisit: [];
  }

  openDialog(templateRef, visit, action) {
    this.visit_action = action;
    this.visit_to_manage = visit;
    this.dialogRef = this.dialog.open(templateRef, {
     width: '300px'
   });
  }

  manage_this_visit(){
    let payload ={
      'action': this.visit_action,
      'visitUuid': this.visit_to_manage.visitUuid,
      'comment': this.visit_action_reason
    }
    
    this.visitManage$ = this.managementService.manageVisit(payload).subscribe((response: any)=>{
      this.visit_action_reason = '';
      this.visit_to_manage = {};
      if(response.status == 'success'){
        this.messageService.displayMessage('success', response.message);
        this.managementService.getPatientPatientByMRN(this.patient.fileNo).subscribe((response: any)=>{
          if(response.length > 0 && response != 'empty'){
            this.manage_visits(response[0]);
          }
        });
      }else{
        this.messageService.displayMessage('error', response.message);
        this.managementService.getPatientPatientByMRN(this.patient.fileNo).subscribe((response: any)=>{
          if(response.length > 0 && response != 'empty'){
            this.manage_visits(response[0]);
          }
        });
        
      }
    }, (error)=>{
      this.messageService.displayMessage('error', error.message);
    });
    this.dialogRef.close();
  }

 

}
